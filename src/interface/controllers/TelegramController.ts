// src/interface/controllers/TelegramController.ts
import { AddBudgetHandler } from "./../handlers/AddBudgetHandler";
import { AddUserHandler } from ".././handlers/AddUserHandler"; // Importa el AddUserHandler

export class TelegramController {
  constructor(
    private addBudgetHandler: AddBudgetHandler,
    private readonly addUserHandler: AddUserHandler // Inyecta el AddUserHandler // Agregar el nuevo handler
  ) {}

  async processCommand(
    command: string,
    chatId?: string,
    name?: string
  ): Promise<string> {
    if (command.startsWith("/start")) {
      // Verificar si chatId y name son válidos

      if (!name || !chatId) {
        return "Error: Nombre o chatId no proporcionados"; // Manejar el caso de valores indefinidos
      }
      const result = await this.addUserHandler.handle(name, chatId);
      console.log(result); // Imprime el resultado para verificar

      if (result === "Usuario agregado exitosamente.") {
        const welcomeMessage = `👋 ¡Hola ${name}!\nSoy tu asistente de presupuesto personal 🧠💰\n\nConmigo podrás:\n📌 Crear presupuestos mensuales.\n📊 Revisar tus gastos por categoría.\n🔔 Recibir alertas si te estás acercando a tus límites.\n\nComienza con:\n👉 /addBudget para agregar un presupuesto.\n👉 /getAllBudgets para ver tus presupuestos actuales.\n\n¡Vamos a tomar el control de tus finanzas! 🚀`;
        return welcomeMessage;
      } else {
        return result; // Devuelve el resultado del handler de AddUser
      }
    }

    if (command.startsWith("/addBudget")) {
      if (!name || !chatId) {
        return "Error: Nombre o chatId no proporcionados"; // Manejar el caso de valores indefinidos
      }
      return this.addBudgetHandler.handle(command, chatId); // Comando para agregar presupuesto
    }

    return "Comando no reconocido";
  }
}
