import { Budget } from "../core/entidades/Budget";
export interface IBudgetRepo {
  save(budget: Budget): Promise<void>;
  load(): Promise<Budget>;
}
