import { Context, InlineKeyboard } from "grammy";
import { welcomeMessage } from "../messages/welcome";

export async function startCommand(ctx: Context) {
  const teclado = new InlineKeyboard()

    .text("➕ Crear Presupuesto", "crear_presupuesto")
    .row()
    .text("📊 Ver Presupuestos", "ver_presupuestos")
    .text("📊 Ver Presupuestos", "ver_presupuestos")
    .row()
    .text("ver resumen mensual", "ver_resumen_mensual");
  await ctx.reply(welcomeMessage(ctx.from?.first_name), {
    reply_markup: teclado,
    parse_mode: "Markdown",
  });
}

export async function iniciarCallback(ctx: Context) {
  await ctx.answerCallbackQuery();
  await ctx.reply("📌 Elige una opción:", {
    reply_markup: new InlineKeyboard()
      .text("➕ Crear Presupuesto", "crear_presupuesto")
      .row()
      .text("📊 Ver Presupuestos", "ver_presupuestos")
      .row()
      .text("📋 Ver Resumen", "ver_resumen"),
  });
}
