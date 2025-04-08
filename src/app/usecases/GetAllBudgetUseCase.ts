// src/app/usecases/GetAllBudgetsUseCase.ts
import { BudgetRepository } from "../../domain/repo/BudgetRepository";
import { Budget } from "../../domain/entities/Budget";

export class GetAllBudgetsUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  async execute(): Promise<string> {
    const budgets = await this.budgetRepository.getAll() as Budget[]; // Suponemos que el repositorio tiene el método getAll

    if (budgets.length === 0) {
      return "No tienes presupuestos creados aún.";
    }

    // Listar todos los presupuestos
    const budgetList = budgets.map(
      (budget: Budget) => `${budget.getName()} - ${budget.getMonthlySummary()}`
    );

    return `Tus presupuestos:\n\n${budgetList.join("\n")}`;
  }
}
