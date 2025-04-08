import { AddBudgetUseCase } from "../../app/usecases/AddBugetUseCase"; // Importa el caso de uso
import { BudgetRepository } from "../../domain/repo/BudgetRepository";
import { UserRepository } from "../../domain/repo/UserRepository"; // Importa el repositorio de usuarios

export class AddBudgetHandler {
  constructor(
    private addBudgetUseCase: AddBudgetUseCase // Inyectamos el caso de uso en el handler
  ) {}

  // Método que maneja el comando /addBudget
  async handle(command: string, chatId: string): Promise<string> {
    // Aquí analizamos el comando, suponiendo que el formato es: "/addBudget nombre monto"
    const commandParts = command.split(" ");

    if (commandParts.length !== 3) {
      return "Comando incorrecto. Usa el formato: /addBudget nombre monto";
    }

    const name = commandParts[1]; // El nombre del presupuesto (e.g., "marzo_2025")
    const initialBudget = parseFloat(commandParts[2]); // El monto inicial del presupuesto (e.g., 1500)

    if (isNaN(initialBudget) || initialBudget <= 0) {
      return "El monto debe ser un número mayor que cero.";
    }

    try {
      // Ejecutamos el caso de uso para crear el presupuesto
      const result = await this.addBudgetUseCase.execute(
        chatId,
        name,
        initialBudget
      );
      return result; // Si todo va bien, devolver el mensaje del caso de uso
    } catch (error) {
      // Si ocurre algún error, lo capturamos y mostramos un mensaje
      if (error instanceof Error) {
        return `Error: ${error.message}`;
      }
      return "An unknown error occurred.";
    }
  }
}
