const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "updatelog",
    description: "gets the bot's updates",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);

      const emb = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Update Logs`)
      .setDescription(`Last Update: **5/1/23** \n Added: Publish \n Notes: N/A \n Update Made by: Owner`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`Made with 💖 by discord.azury.live | Dayln `) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
				.setLabel('Instant')
				.setStyle('LINK'),
			);

      
      setTimeout(() => {
        msg.edit({ content: `Support Server! https://discord.gg/2tRW7Uq4Us`, embeds: [emb], components: [row] });
      }, 500);
    },
};
