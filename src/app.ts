import { bot } from "./infra/bots/telegram/TelegramBot";
import dotenv from "dotenv";
dotenv.config();

bot.start();
console.log("🤖 Bot de Telegram iniciado...");
console.log(
  "💰 Presupuesto Bot listo para recibir comandos.",
  process.env.DATABASE_URl
);
// test.ts (en la raíz del proyecto o en un folder de pruebas)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log("Usuarios:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
