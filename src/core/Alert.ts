import { Budget } from "./entidades/Budget";
export class Alert {
  static checkBudget(budget: Budget, threshold: number): string | null {
    const remaining = budget.getRemaining();
    if (remaining < budget.total * threshold) {
      return `⚠️ Queda menos del ${threshold * 100}% del presupuesto.`;
    }
    return null;
  }
}
