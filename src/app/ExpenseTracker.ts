import { TrackSpend } from "../core/entidades/TrackSpend";

export class ExpenseTracker {
  static registerExpense(amount: number, category: string) {
    TrackSpend.execute(amount, category);
  }
}
