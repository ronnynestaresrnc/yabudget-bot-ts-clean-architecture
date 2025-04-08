export class Budget {
  constructor(
    public userId: number, // referencia al usuario dueño
    public name: string, // Ej: marzo_2025
    public amount: number // Monto total del presupuesto
  ) {}
}
