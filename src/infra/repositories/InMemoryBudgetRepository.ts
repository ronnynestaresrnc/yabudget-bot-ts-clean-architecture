// src/infra/repositories/InMemoryBudgetRepository.ts
import { BudgetRepository } from "../../domain/repo/BudgetRepository";
import { Budget } from "../../domain/entities/Budget";

export class InMemoryBudgetRepository implements BudgetRepository {
  private budgets: Budget[] = [];

  // Guardar un presupuesto en memoria
  async save(budget: Budget): Promise<void> {
    this.budgets.push(budget);
  }

  // Cargar un presupuesto por nombre
  async load(name: string): Promise<Budget | null> {
    return this.budgets.find((budget) => budget.getName() === name) || null;
  }

  // Obtener todos los presupuestos
  async getAll(): Promise<Budget[]> {
    return this.budgets; // Devuelve todos los presupuestos almacenados
  }
  // Eliminar un presupuesto por nombre
  async delete(name: string): Promise<void> {
    const index = this.budgets.findIndex((budget) => budget.getName() === name);
    if (index !== -1) {
      this.budgets.splice(index, 1); // Eliminar el presupuesto de la lista
    }
  }
}
