import { Bot, Context } from "grammy";
import { TelegramController } from "../../../interface/controllers/TelegramController";
import { AddBudgetHandler } from "../../../interface/handlers/AddBudgetHandler";
import { AddBudgetUseCase } from "../../../app/usecases/AddBugetUseCase";
import { AddUserHandler } from "../../../interface/handlers/AddUserHandler";
import { AddUserUseCase } from "../../../app/usecases/AddUserUserCase";
import { PrismaUserRepository } from "../../repositories/PrismaUserRepository";
import { PrismaBudgetRepository } from "../../repositories/PrismaBudgetRepository";

const TOKEN = "7099632176:AAFRDrFFA8GBiO15rYkmSI6zikIzFiOLBis";
// Repositorios
const budgetRepository = new PrismaBudgetRepository();
const userRepository = new PrismaUserRepository();

// Casos de uso
const addBudgetUseCase = new AddBudgetUseCase(budgetRepository, userRepository);
const addUserUseCase = new AddUserUseCase(userRepository);

// Handlers
const addBudgetHandler = new AddBudgetHandler(addBudgetUseCase);
const addUserHandler = new AddUserHandler(addUserUseCase);

// Controlador
const telegramController = new TelegramController(
  addBudgetHandler,
  addUserHandler
);

// Bot de Telegram
export const bot = new Bot(TOKEN);

// Escuchar mensajes
bot.on("message", async (ctx: Context) => {
  try {
    if (ctx.message && ctx.message.text) {
      const command = ctx.message.text;
      const chatId = ctx.message.chat.id.toString();
      const name = ctx.message.from?.first_name || "Usuario";

      const message = await telegramController.processCommand(
        command,
        chatId,
        name
      );

      await ctx.reply(message);
    }
  } catch (error) {
    console.error("Error al procesar el comando:", error);
    await ctx.reply("Hubo un error procesando tu comando.");
  }
});
