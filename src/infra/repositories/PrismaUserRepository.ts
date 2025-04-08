import { PrismaClient } from "@prisma/client"; // Importa el cliente Prisma
import { UserRepository } from "../../domain/repo/UserRepository";
import { User } from "../../domain/entities/User";

export class PrismaUserRepository implements UserRepository {
  private prisma = new PrismaClient(); // Instancia del cliente Prisma

  // Implementa el método de guardar usuario
  async save(user: User): Promise<User> {
    const userData = await this.prisma.user.create({
      data: {
        name: user.name,
        platformId: user.platformId,
        platform: user.platform,
      },
    });

    // Devuelve el objeto de usuario creado, ahora con el `id`
    return new User(
      userData.name,
      userData.platformId,
      userData.platform,
    );
  }

  // Implementa el método para encontrar un usuario por ID
  async findById(id: number): Promise<User | null> {
    const userData = await this.prisma.user.findUnique({
      where: { id },
    });

    return userData
      ? new User(
          userData.name,
          userData.platformId,
          userData.platform,
        )
      : null;
  }

  // Implementa el método para encontrar un usuario por platformId (como el chatId)
  async findByPlatformId(
    platformId: string,
    platform: string
  ): Promise<User | null> {
    const userData = await this.prisma.user.findFirst({
      where: {
        platformId,
        platform,
      },
    });

    return userData
      ? new User(
          userData.name,
          userData.platformId,
          userData.platform,
        )
      : null;
  }

  // Método solo para obtener el ID de un usuario por chatId y plataforma
  async getUserIdByChatIdAndPlatform(
    chatId: string,
    platform: string
  ): Promise<number | null> {
    const userData = await this.prisma.user.findFirst({
      where: {
        platformId: chatId, // Usamos chatId como platformId
        platform,
      },
    });

    return userData ? userData.id : null; // Retorna solo el id, o null si no se encuentra el usuario
  }

  async findbychatId(
    chatId: string,
  ): Promise<number | null> {
    const userData = await this.prisma.user.findFirst({
      where: {
        platformId: chatId, // Usamos chatId como platformId
      },
    });

    return userData ? userData.id : null; // Retorna solo el id, o null si no se encuentra el usuario
  }

}
