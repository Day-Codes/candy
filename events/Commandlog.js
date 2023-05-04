const client = require("../main");
const { WebhookClient, Message, MessageEmbed } = require("discord.js");


client.on("interactionCreate", async (interaction) => {
if(!interaction.guild) return;
if (!interaction.isCommand()) return;

const cmd = client.slashCommands.get(interaction.commandName);
if(!cmd) return;
//https://discord.com/api/webhooks/1077767111692255453/
const webhook = new WebhookClient({
  id : "1077767111692255453",
  token : "VoDL1mT7kXSwZ-VBIgjYa_LnYRdS5jl3zQb57p4M4YJhlg4sIOb3LB3x4cNr1UOhQ4Y9",
});

const embed = new MessageEmbed()
.setColor(`WHITE`)
.setAuthor(`${interaction.user.username} - Used a Command`, interaction.user.displayAvatarURL())
.addField(`Name`, `\`\`\`/${cmd.name}\`\`\``, true)
.addField(`Channel`, `\`\`\`${interaction.channel.name} - ${interaction.channel.id}\`\`\``, true)
.addField(`Used at:`, `<t:${Math.floor((Date.now()) / 1000)}:F> *(<t:${Math.floor((Date.now()) / 1000)}:D>)*`)
.setFooter(`Used in: ${interaction.guild.name} - ${interaction.guild.id}`, interaction.guild.iconURL())

webhook.send({
  username : ""+client.user.username+" - Command Logging", 
  avatarURL : client.user.displayAvatarURL(), 
  embeds : [embed], 
}).then(() => {
  console.log(`${interaction.user.tag} - Used the command (${cmd.name}) - In ${interaction.channel.name}`);
}).catch((e) => {
  console.warn(`Failed to send. Cmd Logging`);
  console.log(e.stack ? e.stack : e);
});

})
