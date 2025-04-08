// src/domain/entities/Category.ts
export class Category {
  name: string;
  limit: number;
  budgetId: number; // Hace referencia al presupuesto al que pertenece esta categoría

  constructor(name: string, limit: number, budgetId: number) {
    this.name = name;
    this.limit = limit;
    this.budgetId = budgetId;
  }
}
