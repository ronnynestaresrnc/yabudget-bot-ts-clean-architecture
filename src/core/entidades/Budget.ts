export class Budget {
  static addExpense(amount: number) {
      throw new Error("Method not implemented.");
  }
  private totalBudget: number;
  private expenses: number;

  constructor(initialBudget: number) {
    this.totalBudget = initialBudget;
    this.expenses = 0;
  }

  setBudget(amount: number) {
    this.totalBudget = amount;
  }

  addExpense(amount: number) {
    this.expenses += amount;
  }

  getStatus(): string {
    const remaining = this.totalBudget - this.expenses;
    return `💰 Presupuesto restante: ${remaining} / ${this.totalBudget}`;
  }

  getMonthlySummary(): string {
    return `📊 Gastado: ${this.expenses} / ${this.totalBudget}`;
  }
}
