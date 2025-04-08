// import { Bot, Keyboard } from "grammy";
// import { BudgetManager } from "./BudgetManager";
// import { ExpenseTracker } from "./ExpenseTracker";

// export class BotCommands {
//   private bot: Bot;

//   constructor(bot: Bot) {
//     this.bot = bot;
//   }

//   setup() {
//     const keyboard = new Keyboard()
//       .text("💰 Establecer presupuesto")
//       .row()
//       .text("➕ Registrar gasto")
//       .row()
//       .text("📊 Ver estado")
//       .text("📅 Resumen mensual")
//       .resized();

//     this.bot.command("start", (ctx) => {
//       ctx.reply("👋 ¡Bienvenido al bot de presupuesto!\nElige una opción:", {
//         reply_markup: keyboard,
//       });
//     });

//     this.bot.command("presupuesto", (ctx) => {
//       const args = ctx.message?.text?.split(" ");
//       if (!args || args.length < 2)
//         return ctx.reply("⚠️ Usa: /presupuesto <monto>");

//       const amount = parseFloat(args[1]);
//       if (isNaN(amount)) return ctx.reply("⚠️ Ingresa un número válido.");

//       BudgetManager.setBudget(amount);
//       ctx.reply(`✅ Presupuesto mensual establecido en: ${amount}`);
//     });

//     this.bot.command("gastar", (ctx) => {
//       const args = ctx.message?.text?.split(" ");
//       if (!args || args.length < 3)
//         return ctx.reply("⚠️ Usa: /gastar <monto> <categoría>");

//       const amount = parseFloat(args[1]);
//       const category = args[2];

//       if (isNaN(amount)) return ctx.reply("⚠️ Ingresa un número válido.");

//       try {
//         ExpenseTracker.registerExpense(amount, category);
//         ctx.reply(`✅ Gasto registrado: ${amount} en ${category}`);
//       } catch (error) {
//         const errorMessage = error instanceof Error ? error.message : "Error desconocido";
//         ctx.reply(`⚠️ ${errorMessage}`);
//       }
//     });

//     this.bot.command("estado", (ctx) => {
//       ctx.reply(BudgetManager.getStatus());
//     });

//     this.bot.command("resumen", (ctx) => {
//       ctx.reply(BudgetManager.getMonthlySummary());
//     });
//   }
// }
