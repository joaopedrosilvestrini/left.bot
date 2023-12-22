import { ChatInputCommandInteraction } from "discord.js";

export async function hasThread(interaction: ChatInputCommandInteraction) {
    var LeftServer = interaction.client.guilds.cache.get("1177273714216280104");
    var haveThread = LeftServer?.channels.cache.find((e) => e.name === `${interaction.user.username}_bot`);

    if(haveThread) return true;
    else return false;
}