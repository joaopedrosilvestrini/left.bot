import { settings } from "@/settings";
import { brBuilder, createEmbedAuthor, createRow, hexToRgb } from "@magicyan/discord";
import { ApplicationCommandOptionType, ApplicationCommandType, ButtonBuilder, ButtonStyle, EmbedBuilder, hyperlink, inlineCode } from "discord.js";
import { Command } from "../base";
import { setThread } from "@/functions";

new Command({
    name: "app", dmPermission,
    description: "🈴 — Gerencie suas aplicações com este comando.",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            type: ApplicationCommandOptionType.Subcommand,
            name: "add",
            description: "📥 › Envie-nôs uma aplicação para ser verificada e adicionada ao sistema.",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "id",
                    description: "・ Especifique o ID da sua aplicação! (Servidor ou Bot)",
                    required,
                }
            ]
        }
    ],
    async run(interaction) {
        switch (interaction.options.getSubcommand()) {
            case "add": {
                return await setThread(interaction).then((a) => {
                    return a?.send({
                        embeds: [new EmbedBuilder({
                            author: { name: "Confirmando dados...", iconURL: interaction.client.user.avatarURL() as string },
                            description: brBuilder(
                                "**DETECTADO**! Verifique se é sua aplicação!"
                            )
                        })]
                    });
                });
            }
        }
    },
});