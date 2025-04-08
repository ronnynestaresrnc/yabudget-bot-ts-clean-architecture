// src/domain/repo/BudgetRepository.ts
import { Budget } from "../entities/Budget";

export interface BudgetRepository {
  save(budget: Budget): Promise<void>;
  // Otros métodos como find, update, etc.
}
