const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const client = require("../main");
const figlet = require("figlet");
const Cluster = require('discord-hybrid-sharding');

// Backup token == 

client.on("ready", () => {

  console.log(red.bold("Hold on a minute..... If this is still here something went wrong"))

  console.log(white.bold(`
      [===========================================]
                     YESSSS    
                      Working...
                  Developed by Dayln
      [===========================================]
      `))
console.log(blue(`🪐 https://discord.gg/r26cwBzM Server to join`));
    console.log(white(`[🚩BOT] → ` + magenta(`${client.user.tag}`) +  ` is ready to log on`));
    console.log(white("[🚩BOT] → " + blue(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)))
   console.log(`Hello my name is ${client.user.tag}!`);

    client.user.setStatus('online');
    setInterval(() => {
        const statuses = [
            "Cotton Candy",
            '/help',
            `My Love`,
            `You!`,
          `${client.users.cache.size} Users`
  
        
            
            
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" })
    }, 10000)
});
