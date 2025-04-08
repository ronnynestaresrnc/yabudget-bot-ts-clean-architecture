// src/app/handlers/DeleteBudgetHandler.ts
import { DeleteBudgetUseCase } from "../../app/usecases/DeleteBudgetUseCase";

export class DeleteBudgetHandler {
  constructor(private deleteBudgetUseCase: DeleteBudgetUseCase) {}

  async handle(command: string): Promise<string> {
    const [_, name] = command.split(" "); // Extraemos el nombre del presupuesto

    if (!name) {
      return "⚠️ Por favor, proporciona el nombre del presupuesto que deseas eliminar.";
    }

    try {
      return await this.deleteBudgetUseCase.execute(name);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      return `❌ Error: ${errorMessage}`;
    }
  }
}
