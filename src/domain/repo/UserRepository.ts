import { User } from "../entities/User";

export interface UserRepository {
  findbychatId(chatId: string): Promise<number | null>; // Busca un usuario por su chatId
  save(user: User): Promise<User>; // Guarda un nuevo usuario en la base de datos
  findById(id: number): Promise<User | null>; // Busca un usuario por su ID
  findByPlatformId(platformId: string, platform: string): Promise<User | null>; // Busca un usuario por su platformId (Telegram, WhatsApp, etc.)
}
