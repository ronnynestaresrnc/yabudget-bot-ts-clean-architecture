import { Telegraf } from "telegraf";

export class Notifier {
  constructor(private bot: Telegraf) {}

  notify(chatId: number, message: string) {
    this.bot.telegram.sendMessage(chatId, `⚠️ Alerta: ${message}`);
  }
}
