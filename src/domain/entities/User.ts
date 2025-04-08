// src/domain/entities/User.ts
export class User {
  private _id: number | null = null; // _id puede ser null hasta que se guarde en la base de datos
  private _platformId: string; // ID de la plataforma (chatId para Telegram, teléfono para WhatsApp, etc.)
  private _platform: string; // La plataforma: Telegram, WhatsApp, etc.
  private _name: string;

  constructor(name: string, platformId: string, platform: string) {
    if (name.trim() === "") {
      throw new Error("El nombre no puede estar vacío.");
    }
    this._platformId = platformId;
    this._platform = platform;
    this._name = name;
  }

  get id(): number | null {
    return this._id;
  }

  set id(id: number) {
    if (this._id === null) {
      this._id = id;
    } else {
      throw new Error("El ID ya ha sido asignado.");
    }
  }

  get platformId(): string {
    return this._platformId;
  }

  get platform(): string {
    return this._platform;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim() === "") {
      throw new Error("El nombre no puede estar vacío.");
    }
    this._name = newName;
  }
}
