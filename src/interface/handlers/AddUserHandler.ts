import { AddUserUseCase } from "../../app/usecases/AddUserUserCase";

export class AddUserHandler {
  constructor(private addUserUseCase: AddUserUseCase) {}

  async handle(name: string, platformId: string): Promise<string> {
    try {
      // Llamamos al caso de uso con los valores proporcionados
      return await this.addUserUseCase.execute(name, platformId, "Telegram");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      return `Error al crear el usuario: ${errorMessage}`;
    }
  }
}
