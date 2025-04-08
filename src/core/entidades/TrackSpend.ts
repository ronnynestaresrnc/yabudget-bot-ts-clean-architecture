import { Budget } from "./Budget";

export class TrackSpend {
  static execute(amount: number, category: string) {
    if (!Budget) throw new Error("⚠️ Presupuesto no definido.");
    Budget.addExpense(amount);
  }
}
