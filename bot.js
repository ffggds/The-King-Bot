const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('*help | *invite','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
	

client.login(process.env.BOT_TOKEN);
