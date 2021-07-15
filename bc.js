const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "%";
client.on("message", message => {

            if (message.content.startsWith(prefix + "broad")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send("u dont have premission");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== '').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== '').size}\` : message send to `); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : franchisco`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : fanchisco ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});



client.login("NTY3OTUwMTY0MTkxNjA4ODQ0.XRxckA.UgbyqSADm3UVNG6Qc13ssY5ej38");