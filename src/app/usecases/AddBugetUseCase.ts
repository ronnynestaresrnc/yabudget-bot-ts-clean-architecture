import { Budget } from "../../domain/entities/Budget";
import { BudgetRepository } from "../../domain/repo/BudgetRepository";
import { UserRepository } from "../../domain/repo/UserRepository"; // Importa el repositorio de usuarios

export class AddBudgetUseCase {
  constructor(
    private budgetRepository: BudgetRepository,
    private prismaUserRepository: UserRepository // Inyectamos el repositorio de usuarios
  ) {}

  // El caso de uso ahora busca el userId usando el chatId y la plataforma
  async execute(
    chatId: string,
    name: string,
    initialBudget: number
  ): Promise<string> {
    if (initialBudget <= 0) {
      throw new Error("El monto del presupuesto debe ser mayor que cero.");
    }

    // 1. Buscar el userId del usuario con el chatId y la plataforma
    const userId = await this.prismaUserRepository.findbychatId(chatId);

    if (!userId) {
      throw new Error("Usuario no encontrado."); // Si no se encuentra el usuario, lanzar error
    }

    // 2. Crear el presupuesto con el userId encontrado
    const budget = new Budget( userId,name, initialBudget);

    // 3. Guardar el presupuesto en el repositorio
    await this.budgetRepository.save(budget);

    return `Presupuesto creado con éxito: ${name} con un monto de ${initialBudget}`;
  }
}
