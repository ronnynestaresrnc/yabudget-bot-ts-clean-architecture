type Budget = {
  name: string;
  amount: number;
};

export class BudgetManager {
  private static budgets: Record<number, Budget[]> = {}; // Almacena los presupuestos por usuario

  static addBudget(userId: number, name: string, amount: number) {
    if (!this.budgets[userId]) {
      this.budgets[userId] = [];
    }
    this.budgets[userId].push({ name, amount });
  }

  static getBudgets(userId: number): string {
    const userBudgets = this.budgets[userId] || [];
    if (userBudgets.length === 0) {
      return "⚠️ No tienes presupuestos creados aún.";
    }

    return userBudgets
      .map((b, index) => `📌 *${index + 1}.* ${b.name}: *${b.amount}*`)
      .join("\n");
  }
}
