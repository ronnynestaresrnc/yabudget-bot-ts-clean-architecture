import { Bot } from "grammy";
import { BudgetManager } from "../BudgetManager";
import { session, SessionFlavor } from "@grammyjs/storage-memory";

interface SessionData {
  awaitingBudgetName?: boolean;
  awaitingBudgetAmount?: boolean;
  budgetName?: string;
}

export class BotCommands {
  private bot: Bot<SessionFlavor<SessionData>>;

  constructor(bot: Bot<SessionFlavor<SessionData>>) {
    this.bot = bot;
  }

  setup() {
    this.bot.use(session({ initial: () => ({}) })); // Habilita sesiones

    this.bot.command("start", (ctx) => {
      ctx.reply(
        "👋 ¡Bienvenido al bot de presupuesto!\nPor favor, ingresa el nombre de tu presupuesto:"
      );
      ctx.session.awaitingBudgetName = true;
    });

    this.bot.on("message", (ctx) => {
      const userId = ctx.from?.id;
      if (!userId) return;

      if (ctx.session.awaitingBudgetName) {
        const budgetName = ctx.message?.text;
        if (budgetName) {
          ctx.session.budgetName = budgetName;
          ctx.reply(
            `✅ El nombre de tu presupuesto es: ${budgetName}. Ahora, ingresa el monto:`
          );
          ctx.session.awaitingBudgetName = false;
          ctx.session.awaitingBudgetAmount = true;
        }
      } else if (ctx.session.awaitingBudgetAmount) {
        const amount = parseFloat(ctx.message?.text || "");
        if (isNaN(amount)) {
          ctx.reply("⚠️ Ingresa un número válido.");
        } else {
          BudgetManager.addBudget(userId, ctx.session.budgetName!, amount);
          ctx.reply(
            `✅ Presupuesto "${ctx.session.budgetName}" guardado con ${amount} 💰`
          );
          ctx.session.awaitingBudgetAmount = false;
          ctx.session.budgetName = undefined;
        }
      }
    });

    this.bot.command("presupuestos", (ctx) => {
      const userId = ctx.from?.id;
      if (!userId) return;

      ctx.reply(BudgetManager.getBudgets(userId));
    });
  }
}
