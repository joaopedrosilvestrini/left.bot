import { ChatInputCommandInteraction } from "discord.js";
import { hasThread } from "./hasThread";

export async function setThread(interaction: ChatInputCommandInteraction) {
    if(await hasThread(interaction)) return undefined;
    var CreateThread = await interaction.guild?.channels.create({
        name: `${interaction.user.username}_bot`,
        type: 0,
        parent: "1178498785647808623",
        permissionOverwrites: [
            {
                id: interaction.guild.id,
                deny: ["ViewChannel"],
            },
            {
                id: interaction.user.id,
                allow: ["ViewChannel", "SendMessages", "AttachFiles", "AddReactions"],
            },
        ]
    });
    return CreateThread;
}