export class StartBotUseCase {
  execute(userName: string): string {
    return `👋 ¡Hola, ${userName}! 🎯  
Puedes usar los siguientes comandos:  
- 📊 /presupuesto → Ver tu presupuesto actual  
- 💰 /gasto → Registrar un nuevo gasto  
- 📈 /estadísticas → Ver estadísticas de tus gastos  
¡Empecemos! 🚀`;
  }
}
