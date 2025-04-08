// src/app/handlers/GetAllBudgetsHandler.ts
import { GetAllBudgetsUseCase } from "../../app/usecases/GetAllBudgetUseCase";

export class GetAllBudgetsHandler {
  constructor(private getAllBudgetsUseCase: GetAllBudgetsUseCase) {}

  async handle(): Promise<string> {
    try {
      return await this.getAllBudgetsUseCase.execute(); // Llamar al caso de uso para obtener todos los presupuestos
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      return `Error al obtener los presupuestos: ${errorMessage}`;
    }
  }
}
