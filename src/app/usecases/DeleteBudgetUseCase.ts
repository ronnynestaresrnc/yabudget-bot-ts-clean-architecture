// src/app/usecases/DeleteBudgetUseCase.ts
import { BudgetRepository } from "../../domain/repo/BudgetRepository";

export class DeleteBudgetUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  // Ejecutar la eliminación del presupuesto
  async execute(name: string): Promise<string> {
    // Validar que el presupuesto exista
    const budget = await this.budgetRepository.load(name);
    if (!budget) {
      throw new Error(`El presupuesto con nombre "${name}" no existe.`);
    }

    // Eliminar el presupuesto
    await this.budgetRepository.delete(name);

    return `Presupuesto "${name}" eliminado con éxito.`;
  }
}
