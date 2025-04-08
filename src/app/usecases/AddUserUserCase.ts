import { UserRepository } from "../../domain/repo/UserRepository";
import { User } from "../../domain/entities/User";

export class AddUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    name: string,
    platformId: string,
    platform: string
  ): Promise<string> {
    // Primero, comprobamos si el usuario ya existe en la base de datos
    const existingUser = await this.userRepository.findByPlatformId(
      platformId,
      platform
    );

    if (existingUser) {
      return "El usuario ya está registrado en esta platafrma.";
    }

    // Si el usuario no existe, creamos un nuevo usuario
    const user = new User(name, platformId, platform);

    // Guardamos el usuario en la base de datos
    await this.userRepository.save(user);

    return "Usuario agregado exitosamente.";
  }
}
