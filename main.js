const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("?");
var randnum = 0;
bot.login('ODA1ODM5NTI4ODA3NzU5OTI0.YBguiw.GYxMYrm8h5f7PHFAtN_9BwX-c4I');

bot.login('');
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '? Soleria RP ', type: 0 }});
    console.log("Bot Ok  !");
});


bot.on('message',message => {
    if (message.content === "vote"){
        message.reply("https://top-serveurs.net/gta/ls-soleria-rp");
    }


     if (message.content === "Bienvenue")
         message.reply("Bienvenue");


    
            
});
