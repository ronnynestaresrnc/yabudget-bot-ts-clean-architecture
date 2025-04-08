import { BudgetRepository } from "../../domain/repo/BudgetRepository";
import { Budget } from "../../domain/entities/Budget";
import { PrismaClient } from "@prisma/client"; // Suponiendo que usas Prisma

export class PrismaBudgetRepository implements BudgetRepository {
  private prisma = new PrismaClient();

  async save(budget: Budget): Promise<void> {
    // Primero, creamos el presupuesto
    const createdBudget = await this.prisma.budget.create({
      data: {
        userId: budget.userId,
        name: budget.name,
        amount: budget.amount,
      },
    });

    // Aquí puedes agregar la lógica para crear las categorías asociadas al presupuesto
    // Luego, creamos las categorías asociadas a este presupuesto
  }

  // Puedes agregar otros métodos como find, update, delete si es necesario
  // Ejemplo: async findByUserId(userId: string) {...}
}
