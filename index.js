 const { Client, Intents, Collection } = require('discord.js');



const { clintId } = require('./config.json');


const Discord = require('discord.js');

const fs = require("fs");


const Canvas = require("canvas");


const path = require('node:path');


process.on("unhandledRejection", error => {
  return;
});

const express = require('express');//npm i express
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const mongoose = require("mongoose");


const client = new Discord.Client({
  allowedMentions: { parse: ['users', 'roles'], repliedUser: true },


  //  ws: { properties: { $browser: 'Discord iOS' } },
  messageCacheMaxSize: 999999,
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,

    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,

    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ]
});
client.commands = new Collection();
client.events = new Collection();
['commands', 'events'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
})

// لازم يكون تحت تعريف client
setInterval(() => {
  if (!client || !client.user) {
    console.log('Client not login')
    console.log('Restart project')
    process.kill(1)
  }
}, 12000)
// كل 12 ثانية يفحص لا تحط اقل

const { MessageEmbed, Permissions, MessageAttachment, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const DiscordModal = require('discord-modal')
DiscordModal(client)
const db = require('pro.db')
const qdb = require("quick.db")
const ms = require("ms")

const { MongoClient, ServerApiVersion } = require('mongodb');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const uri = "mongodb+srv://fss2:faris1@cluster0.nhyfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => console.log("Database connected"))
module.exports.client = client;
/*const wID = data.get(`Webhook_${message.guild.id}`).id
  const wToken = data.get(`Webhook_${message.guild.id}`).token
  
  const wc = new Discord.WebhookClient(wID, wToken)
  wc.send({
      content: message.content,
      username: message.author.username,
      avatarURL: message.author.avatarURL()
  });
      } 
      
      else {
  message.channel.createWebhook(message.author.username, {
      avatar: message.author.avatarURL(),
  }).then(async wb => {
    wb.send(message.content)
    data.set(`Webhook_${message.guild.id}`, {id: wb.id, token: wb.token})
  })
      }*\
/*
const { Database } = "quickmongo";
const db = new Database(uri);
 
db.on("ready", () => {
    console.log("Connected to the database");
    
});
 db.connect(); */
const { lineReply, lineReplyNoMention } = require("discord-reply")
const prefix = '/'


client.on("ready", async () => {
  const ac = db.get(`activity`)
  const ac1 = db.get(`activity-type`)
  if (!ac || !ac1) return;
  if (ac1 == "STREAMING") {
    client.user.setActivity(`${ac}`, { type: `${ac1}`, url: `https://www.twitch.tv/${ac}` })
    return;
  }
  client.user.setActivity(`online`, { type: `` })
})

client.on('ready', async () => {



  console.log(`|≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠|`);
  console.log(
    `|≠ CLIENT NAME : [ ${client.user.username} ]                  ≠|`
  );
  console.log(
    `|≠ CLIENT TAG : [ ${client.user.discriminator
    } ]                          ≠|`
  );
  console.log(`|≠ CLIENT ID : [ ${client.user.id} ]             ≠|`);
  console.log(
    `|≠ CLIENT SERVERS COUNT : [ ${client.guilds.cache.size
    } ]                   ≠|`
  );
  console.log(
    `|≠ CLIENT CHANNELS COUNT : [ ${client.channels.cache.size
    } ]                ≠|`
  );
  console.log(
    `|≠ CLIENT USERS COUNT : [ ${client.users.cache.size
    } ]                    ≠|`
  );
  console.log(`|≠ CLIENT PING : [ ${client.ws.ping} ] XD                        ≠|`
  );
  console.log(
    `|≠ CLIENT CREATED AT : [ ${client.user.createdAt.toLocaleString()} ]  ≠|`
  );
  console.log(`|≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠|`);
});




const { clientId, testGuildId } = require("./config.json");
const colors = require("colors");


const { PermissionFlagsBits} = require("discord.js");











let owner = ['1222699370260987925', '1114863041058713680', '', '']
client.on('messageCreate', async message => {
  if(message.content.startsWith(prefix + 'set-playing')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'PLAYING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-listening')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'LISTENING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-watching')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'WATCHING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-competing')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'COMPETING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-streaming')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'STREAMING', url : `https://www.twitch.tv/olrp_`})
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
});
        
let loggedMembers = [];

if (fs.existsSync('./loggedMembers.json')) {
  const data = fs.readFileSync('./loggedMembers.json');
  loggedMembers = JSON.parse(data);
}

function saveData() {
  fs.writeFileSync('./loggedMembers.json', JSON.stringify(loggedMembers, null, 2), (err) => {
    if (err) throw err;
    console.log('تم حفظ البيانات بنجاح!');
  });
}

function generateEmbed() {
  let description = 'Police Department Log In <:BLRP:1231336954080002048> \n';
  if (loggedMembers.length > 0) {
    description += `Police Logged In : ${loggedMembers.length} <:OLRP:1228451245648379985> \n\n`;
    description += loggedMembers.map((m, index) => `\n \n ${index + 1} - ${m.member}`).join('');
  } else {
    description += 'Undefined Police Officers <:Offline:1228452705337475154>';
  }

  return new MessageEmbed()
    .setTitle('Police Records <:5_Canclspd:1231330447938551945>')
    .setDescription('**' + description  + '**')
    .setFooter('MDT')
    .setColor('#04013f');
}
client.on('messageCreate', async (message) => {
  if (!message.guild) return;


  const requiredRoleId = '1222699370260987925'; 
  if (message.content === '=reset') {
   
    const requiredRole = message.guild.roles.cache.get(requiredRoleId);

    
    if (requiredRole && message.member.roles.cache.has(requiredRole.id)) {
      loggedMembers = [];
      saveData();
      await message.channel.send('تم إعادة تهيئة البيانات بنجاح.');
    } else {
      await message.channel.send('لا يمكنك استخدام هذا الأمر.');
    }
  }




  if (message.content === '=login') {
    const embed = generateEmbed();

    const loginButton = new MessageButton()
      .setCustomId('login_button')
      .setLabel('Sign Up')
      .setEmoji('<a:YAZ:1118415817311277197>')
      .setStyle('SECONDARY');

    const logoutButton = new MessageButton()
      .setCustomId('logout_button')
      .setLabel('Sign Out')
      .setEmoji('<a:YGR7:1118415819911733329>')
      .setStyle('SECONDARY');

    const row = new MessageActionRow().addComponents(loginButton, logoutButton);

    const sentMessage = await message.channel.send({ embeds: [embed], components: [row] });
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  const member = interaction.member;
  const policeRoleName = '👮🏻‍♂️| 𝗣𝗼𝗹𝗶𝗰𝗲 .';

  const hasPoliceRole = member.roles.cache.some(role => role.name === policeRoleName);

  if (interaction.customId === 'login_button') {
    if (!hasPoliceRole) {
      await interaction.reply({ content: 'You are not Police <:5_Canclspd:1231330447938551945>', ephemeral: true });
      return;
    }

    if (!loggedMembers.some((m) => m.member === member.toString())) {
      loggedMembers.push({ member: member.toString() });
      saveData();

      const embed = generateEmbed();

      await interaction.message.edit({ embeds: [embed] });
      await interaction.reply({ content: `**You Have Been Sign up As ${loggedMembers.length} <:Online:1228452801307345027>**`, ephemeral: true });

      setTimeout(() => {
        const index = loggedMembers.findIndex((m) => m.member === member.toString());
        if (index !== -1) {
          loggedMembers.splice(index, 1);
          saveData();

          const embed = generateEmbed();
          interaction.message.edit({ embeds: [embed] });
        }
      }, 2.5 * 60 * 60 * 1000);
    } else {
      await interaction.reply({ content: '**You Are Already Sign Up Before <:OLRP:1228450574865793155>**', ephemeral: true });
    }
  } else if (interaction.customId === 'logout_button') {
    if (!hasPoliceRole) {
      await interaction.reply({ content: '**You Can’t Yes This Button <:OLRP:1228450574865793155> **', ephemeral: true });
      return;
    }

    const index = loggedMembers.findIndex((m) => m.member === member.toString());

    if (index !== -1) {
      loggedMembers.splice(index, 1);
      saveData();

      const embed = generateEmbed();

      await interaction.message.edit({ embeds: [embed] });
      await interaction.reply({ content: '**You Have Been Sign Out <:Offline:1228452705337475154>**', ephemeral: true });
    } else {
      await interaction.reply({ content: '**You Are Already Sign Out <:Offline:1228452705337475154>**', ephemeral: true });
    }
  }
});







const titles = [
  '**You Have Successfully Complete Hacking** <:OLRP:1228449010222628996>',
  '**You Have Successfully Complete Hacking** <:OLRP:1228449010222628996>',
  ' **You Have Failed <:OLRP:1228450440233095259> **'
];

const images = [
  'https://media.discordapp.net/attachments/1119848363903438908/1171607538530275448/image0.gif?ex=655d4b8c&is=654ad68c&hm=85c7eddf0ce73b0b0eff2c78cf8284787d0a6f347aaac96ce179fd264d431ef8&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171607538530275448/image0.gif?ex=655d4b8c&is=654ad68c&hm=85c7eddf0ce73b0b0eff2c78cf8284787d0a6f347aaac96ce179fd264d431ef8&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Fleeca-Hack') {
    const randomIndex = Math.floor(Math.random() * titles.length);
    const embed = new MessageEmbed()
      .setTitle(titles[randomIndex])
      .setImage(images[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
});


const titles2 = [
  '**You Have Done Drilling <:OLRP:1228449010222628996>**',
  '**You Have Done Drilling <:OLRP:1228449010222628996>**',
  '**You Have Failed <:OLRP:1228450440233095259>**'
];

const images2 = [
  'https://media.discordapp.net/attachments/1119848363903438908/1171611406936850483/IMG_2022.jpg?ex=655d4f26&is=654ada26&hm=1693e9d13b32ba8d2c3c96a87a220c3130b991ab43ddccae66fce4e618bb5a52&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171611406936850483/IMG_2022.jpg?ex=655d4f26&is=654ada26&hm=1693e9d13b32ba8d2c3c96a87a220c3130b991ab43ddccae66fce4e618bb5a52&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Fleeca-Drill') {
    const randomIndex = Math.floor(Math.random() * titles2.length);
    const embed = new MessageEmbed()
      .setTitle(titles2[randomIndex])
      .setImage(images2[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 


const titles3 = [
  ' ** You Have Found The Vangelico Key**',
  ' ** You Have Earn 90000 Cash <:OLRP:1228451653540118601>** ',
  ' ** You Have Earn 90000 Cash <:OLRP:1228451653540118601> ** ',
  '** You Have Earn 90000 Cash <:OLRP:1228451653540118601>**',
  
  '** You Have Earn 90000 Cash <:OLRP:1228451653540118601>**',
  '** You Have Earn 50000 Cash <:OLRP:1228451653540118601>**',
   '** You Have Earn 50000 Cash <:OLRP:1228451653540118601>**',
   '** You Have Earn 50000 Cash <:OLRP:1228451653540118601>**',
   '** You Have Earn 50000 Cash <:OLRP:1228451653540118601>**',
   '**You Have Failed <:OLRP:1228450440233095259> **'
];

const images3 = [
  'https://media.discordapp.net/attachments/1119848363903438908/1171612196980146247/IMG_2023.jpg?ex=655d4fe3&is=654adae3&hm=d0c07be36dd295ac881267e9e241fafb44b937e0a0bc0c2d007d8c8685e2ff5e&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',
    'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',

   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',

   'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='
];

                                        

client.on('messageCreate', (msg) => {
  if (msg.content === '/Fleeca-Earn') {
    const randomIndex = Math.floor(Math.random() * titles3.length);
    const embed = new MessageEmbed()
      .setTitle(titles3[randomIndex])
      .setImage(images3[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 

const titles4 = [

' ** The Safe Is Now Open **<:OLRP:1228449010222628996>',
  '** The Safe Is Now Open **<:OLRP:1228449010222628996> ',
  '**You Have Failed <:OLRP:1228450440233095259>**'

];

const images4 = [

  'https://media.discordapp.net/attachments/1119848363903438908/1171624944073982064/image0.gif?ex=655d5bc2&is=654ae6c2&hm=b15b3f33aadff096a9bfab3d2f2013e54aee677d0e5763b17a976246bbc8cdfa&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171624944073982064/image0.gif?ex=655d5bc2&is=654ae6c2&hm=b15b3f33aadff096a9bfab3d2f2013e54aee677d0e5763b17a976246bbc8cdfa&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/House-Safe') {
    const randomIndex = Math.floor(Math.random() * titles4.length);
    const embed = new MessageEmbed()
      .setTitle(titles4[randomIndex])
      .setImage(images4[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 

const titles50 = [

'**<:emoji_348:1228453405702361208> You Have Successfully Complete **<:OLRP:1228449010222628996> ',
  '**<:emoji_348:1228453405702361208> You Have Successfully Complete **<:OLRP:1228449010222628996> ',
  '** You Have Failed <:OLRP:1228450440233095259> **'
 
];

const images50 = [

  'https://media.discordapp.net/attachments/1119848363903438908/1171626538555416586/image0.gif?ex=655d5d3e&is=654ae83e&hm=41f0c3fb20ddbbb35a705b8d303ad55235ca26f4eab2c4e2bb2aeee00d6b6587&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171626538555416586/image0.gif?ex=655d5d3e&is=654ae83e&hm=ddbbb35a705b8d303ad55235ca26f4eab2c4e2bb41f0c3fb202aeee00d6b6587&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$House-Lockpicking') {
    const randomIndex = Math.floor(Math.random() * titles50.length);
    const embed = new MessageEmbed()
      .setTitle(titles50[randomIndex])
      .setImage(images50[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
});


const titles6 = [

'** You Have Earn 20000 Cash <:OLRP:1228451653540118601> **',
  '** You Have Earn 20000 Cash <:OLRP:1228451653540118601> **',
  '** You Have Have Earn 10000 Cash ** <:OLRP:1228451653540118601>',
  '** You Have Have Earn 10000 Cash ** <:OLRP:1228451653540118601>',
  '** You Have Found A Fleeca Black Card <:LERP:1231360185801379941> **',
  '**You Have Failed <:OLRP:1228450440233095259> **'

];

const images6 = [

  'https://media.discordapp.net/attachments/1119848363903438908/1171770791705186365/IMG_2029.jpg?ex=655de397&is=654b6e97&hm=f87cc420e83635f9cb4d53e02c342a5b50f70ee3cc3c5a9a379ee85319f7f167&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171770791705186365/IMG_2029.jpg?ex=655de397&is=654b6e97&hm=f87cc420e83635f9cb4d53e02c342a5b50f70ee3cc3c5a9a379ee85319f7f167&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171770910685012048/IMG_2029.jpg?ex=655de3b3&is=654b6eb3&hm=40bd3a969b93187db0bece9c8c882340d2783b06049db0bf467ba048e3d28051&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171770910685012048/IMG_2029.jpg?ex=655de3b3&is=654b6eb3&hm=40bd3a969b93187db0bece9c8c882340d2783b06049db0bf467ba048e3d28051&=',
  
  'https://media.discordapp.net/attachments/1119848363903438908/1171771123994738698/IMG_2029.jpg?ex=655de3e6&is=654b6ee6&hm=d8914413908e7dc35355bd4774abe4284ef422fd351544fddedd53e6ef34011e&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/House-Earn') {
    const randomIndex = Math.floor(Math.random() * titles6.length);
    const embed = new MessageEmbed()
      .setTitle(titles6[randomIndex])
      .setImage(images6[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 

const titles7 = [

'** You Have Earn 2000 Cash **<:OLRP:1228451653540118601>'
  
];

const images7 = [
'https://media.discordapp.net/attachments/1119848363903438908/1171786125581492244/image0.gif?ex=655df1df&is=654b7cdf&hm=325f303d6ada227ef2b5b512f7f1a5b5e84331055ce75d1bbb61b7bb504daa71&='  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Earn-Cashier') {
    const randomIndex = Math.floor(Math.random() * titles7.length);
    const embed = new MessageEmbed()
      .setTitle(titles7[randomIndex])
      .setImage(images7[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
});


const titles8 = [

'** You Have Earn 500 Cash **<:OLRP:1228451653540118601>'

];

const images8 = [
'https://media.discordapp.net/attachments/1119848363903438908/1171787762559635456/image0.gif?ex=655df365&is=654b7e65&hm=a4ba54a79c52493d0cc9b619f25f771a0c77c75a15af6ecbab18eae4f0f7fd1d&='
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Earn-Cashier-2') {
    const randomIndex = Math.floor(Math.random() * titles8.length);
    const embed = new MessageEmbed()
      .setTitle(titles8[randomIndex])
      .setImage(images8[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});


const titles9 = [

'**<:emoji_348:1228453405702361208> The Safe Is Now Open **<:OLRP:1228449010222628996>'

];

const images9 = [


  
'https://media.discordapp.net/attachments/1119848363903438908/1171792976154988564/image0.gif?ex=655df840&is=654b8340&hm=ecb242f592954a2bcf9eb824a70886ae3ad9617e012b75bb7db0ed4dee2f3f9c&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Safe-Lockpick') {
    const randomIndex = Math.floor(Math.random() * titles9.length);
    const embed = new MessageEmbed()
      .setTitle(titles9[randomIndex])
      .setImage(images9[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles10 = [

'**You Have Found A House Keys **<:emoji_160:1222391186229297182> ',
  '** You Have Earn 1000 Cash **<:OLRP:1228451653540118601>',
  '**You Have Failed ** <:OLRP:1228450440233095259>',
  '**You Have Failed ** <:OLRP:1228450440233095259>'
  
];

const images10 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171795856249344040/image0.gif?ex=655dfaef&is=654b85ef&hm=237c579f500a93e6344e2299849d8ce30721ea091bea2dcb5a275f0ddaa7e25f&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171795856249344040/image0.gif?ex=655dfaef&is=654b85ef&hm=237c579f500a93e6344e2299849d8ce30721ea091bea2dcb5a275f0ddaa7e25f&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Earn-Safe') {
    const randomIndex = Math.floor(Math.random() * titles10.length);
    const embed = new MessageEmbed()
      .setTitle(titles10[randomIndex])
      .setImage(images10[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});


const titles11 = [

'**<:emoji_348:1228453405702361208> You Have Successfully Lockpicking **<:OLRP:1228449010222628996>'

];

const images11 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171800361305124886/IMG_2037.jpg?ex=655dff21&is=654b8a21&hm=87e172e9fa6f915d1753ec48d6fe829398a73cb06ff930ab88a3c913efcc19d5&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Store-Lockpicking') {
    const randomIndex = Math.floor(Math.random() * titles11.length);
    const embed = new MessageEmbed()
      .setTitle(titles11[randomIndex])
      .setImage(images11[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles13 = [

'** <:Online:1153850547787546826> You Have Successfully <a:9gif16:1059915674799067177> **',
  '**<:2_DLWorld:1156686780574220319> You Have Failed <a:9gif15:1059915714175172678>**'

];

const images13 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171607538530275448/image0.gif',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '$ATM-Hack') {
    const randomIndex = Math.floor(Math.random() * titles13.length);
    const embed = new MessageEmbed()
      .setTitle(titles13[randomIndex])
      .setImage(images13[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles15 = [

'** You Have Earn 1500 ** <:OLRP:1228451653540118601>',
  '** You Have Earn 500 ** <:OLRP:1228451653540118601>',
  '** There Is No Money In the ATM ** <:OLRP:1228450440233095259>'
  

];

const images15 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171806474771648603/IMG_2038.webp?ex=655e04d2&is=654b8fd2&hm=e1b04df0d0ba06f38ffa527df15664174ef514e71df110351e114dea7bc874a6&=&width=687&height=671',

  
'https://media.discordapp.net/attachments/1119848363903438908/1171806474771648603/IMG_2038.webp?ex=655e04d2&is=654b8fd2&hm=e1b04df0d0ba06f38ffa527df15664174ef514e71df110351e114dea7bc874a6&=&width=687&height=671',

  
  'https://media.discordapp.net/attachments/1119848363903438908/1171806878007824477/IMG_2039.jpg?ex=655e0532&is=654b9032&hm=3365643f6d5d283405d32abb245d3e0827919d0bbb8f7018554b20669f8030ce&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '/ATM-Earn') {
    const randomIndex = Math.floor(Math.random() * titles15.length);
    const embed = new MessageEmbed()
      .setTitle(titles15[randomIndex])
      .setImage(images15[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles17 = [

'** You Have Cutt The Paint ** <:OLRP:1228449010222628996>'

];

const images17 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172004823600742410/image0.gif?ex=655ebd8c&is=654c488c&hm=d93dca75d94777618068662d0a1048c9be94af3a7628c591ac662dc8a426fc23&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Paint-Cutt') {
    const randomIndex = Math.floor(Math.random() * titles17.length);
    const embed = new MessageEmbed()
      .setTitle(titles17[randomIndex])
      .setImage(images17[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles18 = [

'** You Have Cutt The Paint ** <:OLRP:1228449010222628996>'

];

const images18 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172014643330437140/image0.gif?ex=655ec6b1&is=654c51b1&hm=65cd7a8330a2368f4876c5cef53d870b51688f916941ac2aa34f09a59af81d5c&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Paint-Cutt-2') {
    const randomIndex = Math.floor(Math.random() * titles18 .length);
    const embed = new MessageEmbed()
      .setTitle(titles18[randomIndex])
      .setImage(images18[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles19 = [

'** You Have Earn 2x Rolex Watches**',

  '** You Have Earn 3x Rolex Watches**',
  '** You Have Earn 4x Rolex Watches**',
  '** You Have Earn 5x Rolex Watches**'
];

const images19 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&=',

  'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&=',






'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&=',


'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/First-Glass-Earn') {
    const randomIndex = Math.floor(Math.random() * titles19 .length);
    const embed = new MessageEmbed()
      .setTitle(titles19[randomIndex])
      .setImage(images19[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles20 = [

'** You Have Earn 7x Diamond Ring ** 💍',
  '** You Have Earn 6x Diamond Ring ** 💍',
  '** You Have Earn 2x Diamond Ring ** 💍',
  '** You Have Earn 4x Diamond Ring ** 💍',
];

const images20 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&=',









'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&=',




'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&=',




'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Second-Glass-Earn') {
    const randomIndex = Math.floor(Math.random() * titles20 .length);
    const embed = new MessageEmbed()
      .setTitle(titles20[randomIndex])
      .setImage(images20[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles21 = [

'** You Have Earn 5x Gold Necklace **',
  '** You Have Earn 1x Gold Necklace **',
  '** You Have Earn 3x Gold Necklace **',
  '** You Have Earn 6x Gold Necklace ** '
];

const images21 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&=',





  
'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&=',





  
'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&=',



  
'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '/Third-Glass-Earn') {
    const randomIndex = Math.floor(Math.random() * titles21.length);
    const embed = new MessageEmbed()
      .setTitle(titles21[randomIndex])
      .setImage(images21[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles22 = [

'** <:Online:1153850547787546826> System Hacked <a:9gif16:1059915674799067177>**',


  '**<:2_DLWorld:1156686780574220319> You Have Failed <a:9gif15:1059915714175172678>**',
  '**<:2_DLWorld:1156686780574220319> You Have Failed <a:9gif15:1059915714175172678>**'

];

const images22 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172021230950424638/IMG_2062.jpg?ex=655eccd4&is=654c57d4&hm=8c04b2c7657910d921176a47ca0e670180a663c9ebd5eda28ff6baa04484a715&=',


'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&=',
  
'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '$𝖵angelico-Hack') {
    const randomIndex = Math.floor(Math.random() * titles22.length);
    const embed = new MessageEmbed()
      .setTitle(titles22[randomIndex])
      .setImage(images22[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

const titles23 = [

'** You Have Successfully Broke The Door ** <:OLRP:1228449010222628996>'

];

const images23 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172021455714787378/IMG_2059.webp?ex=655ecd0a&is=654c580a&hm=2cba766b9aeb45f5731a7af77ac35c6cca3d72ede6c92e82b0127af9523aa250&=&width=1193&height=671'


];



client.on('messageCreate', (msg) => {
  if (msg.content === '/𝖵angelico-Open') {
    const randomIndex = Math.floor(Math.random() * titles23.length);
    const embed = new MessageEmbed()
      .setTitle(titles23[randomIndex])
      .setImage(images23[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});

client.on('messageCreate', (message) => {
  if (message.content === '/Check in') {
    const embed = new MessageEmbed()
      .setDescription(` ** \n لقد قام [ <@${message.author.id}> ] بتعبئة بياناته <:127:1228450731145564361>**  `)


      
       .setTitle(` \`\`\`\يمنع منعاً باتاً الهروب من الشرطه داخل المستشفي ويمنع الخروج من عند المستشفي الا  عند انتهاء خط الإنعاش . \`\`\`\ `)
      .setImage(' https://media.discordapp.net/attachments/1119848363903438908/1173042629676646500/image0.gif?ex=65628414&is=65500f14&hm=cac87e4143b751fb7d5f69ef6ed5e972e4f6b632120c1e3e62975cccac3c906c&= ')
      .setColor('BLACK')
      
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
});

client.on('messageCreate', (message) => {
  if (message.content === '/Spray') {
    const embed = new MessageEmbed()

       .setTitle(`You Have Successfully Sprayed <:OLRP:1228449010222628996>`)
      
      .setDescription(` ** 
يرجي منك تصوير الجدار الذي تقوم بالبخ عليه وصوره للموقع بالخريطه  

- بعد الانتهاء من البخ قم باستعمال الامر 
[!use Spray]** <:BLspray:1231370611700273193>`)

      .setImage(' https://media.discordapp.net/attachments/1119848363903438908/1173049056814174298/image0.gif?ex=65628a11&is=65501511&hm=bcb3cff90ea13079ef26180d7ca65a0065f3c3943144e3f9167b914c93b88092&= ')
      .setColor('BLACK')
      
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
});





client.on('messageCreate', (message) => {
  if (message.content === '/Spray-Remover') {
    const embed = new MessageEmbed()
      .setTitle(` ** You have Successfully Remove The Graffiti ** <:OLRP:1228450440233095259>`)

      .setImage(' https://media.discordapp.net/attachments/1119848363903438908/1173049430866415677/image0.gif?ex=65628a6a&is=6550156a&hm=dd5de3e8cc56f1ba25a47ab989439938a33cf7972ae889c5f1b2de5c460c5e8f&= ')
      .setColor('BLACK')

      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
});

client.on('messageCreate', (message) => {
  if (message.content === '#0') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1230746273552928809/1231374452844134431/B4837932-FAEC-4E7E-930C-B7C27B57D8FD.jpg?ex=66259653&is=662444d3&hm=79228f77d5843b3e14d73593871004fb4f167aa4de5f6d52d30196a7fde6cf6a&')
      .setColor('#e4660b')

    message.channel.send({ embeds: [embed],  content: `||<@&1222699474867195944> ||` });
  }
});

/////////////

client.on('messageCreate', (message) => {
  if (message.content === '#2') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1230746273552928809/1231374568967508060/69867B1A-3C9D-47D9-B2F0-C80E0AC052A4.jpg?ex=6625966f&is=662444ef&hm=dcbf99f5c55a9869a530c8cd7c1534382b5bb9e69259d53d6541a43ea9ad4fa7&')
      .setColor('#e4660b')

    message.channel.send({ embeds: [embed],  content: `||<@&1222699474867195944> ||` });
  }
});

client.on('messageCreate', (message) => {
  if (message.content === '#3') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1230746273552928809/1231376112660254810/A4E195AA-66B5-4692-8B3E-4C3A3EF1989F.jpg?ex=6636bb5f&is=6624465f&hm=71138fe8f51e8ba4e1ff83a2ff0b0a5c1014eb292c08230b207d2595d44e57c1&')
      .setColor('#e4660b')

    message.channel.send({ embeds: [embed],  content: `||<@&1222699474867195944> ||` });
  }
});

client.on('messageCreate', (message) => {
  if (message.content === '#4') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1230746273552928809/1231375059638288436/D56CD4C6-D898-45CC-A997-73BCD52AEA45.jpg?ex=6636ba64&is=66244564&hm=ed79202ef8ed38127ccc7fcdc076b46d2ad211c1adb0e4f5888b9310fa959cf0&')
      .setColor('#e4660b')

    message.channel.send({ embeds: [embed],  content: `||<@&1222699474867195944> ||` });
  }
});

client.on('messageCreate', (message) => {
  if (message.content === '#5') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1230746273552928809/1231376308575928401/98468BDC-A4FD-4ED9-93F1-D70F18EA0573.jpg?ex=6636bb8d&is=6624468d&hm=3387c126a064d1246183b7745a1d917cc8d69f5768a25fbf7a66f00e2a795f5c&')
      .setColor('#e4660b')

    message.channel.send({ embeds: [embed],  content: `||<@&1222699474867195944> ||` });
  }
});

//////////

let messages = [
  "__** you have found 5 gunpowder **__ ( <:8Barod:1054420508885651567> )",

 "__** You Have Been Found 1 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
  
    "__** Empty **__",

  "__** You Have Been Foun 2 iron **__ ( <:8_1metalx:1106575941578276988> )",


  "__** You Have Been Found 3 Steal ( <:8_1metalz:1106575990211223642> ) **__",

  "__** You Have Been Found 3 GunPowder **__ (<:8Barod:1054420508885651567>)",

  " __** You Have Been Found 1 iron **__ ( <:8_1metalx:1106575941578276988> ) ",


 "__** You Have Been Found 3 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
  
  "__** Empty **__",

  "__** You Have Been Found 7 GunPowder **__ (<:8Barod:1054420508885651567>)",

  "__**  You Have Been Found 1 Plastic **__ (<:8Blastic:1054421302506684436>)",


   "__** You Have Been Found 3 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
    
  "__** You Have Been Found 3 Plastic **__ (<:8Blastic:1054421302506684436>)",


  "__** You Have Been Found 3 Copper ( <:8_1Metals:1106575867628507187> ) **__",


  "__** You Have Been Found 1 Steal ( <:8_1metalz:1106575990211223642> ) **__",

   "__** You Have Been Found 5 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
  
  "__** You Have Been Found 3 GunPowder **__ (<:8Barod:1054420508885651567>)",


  "__** You Have Been Found 3 Steal ( <:8_1metalz:1106575990211223642> ) **__",

  "__** You Have Been Found 3 Copper ( <:8_1Metals:1106575867628507187> ) **__",

  
  "__** You Have Been Found 8 iron **__ ( <:8_1metalx:1106575941578276988> ) ",

  
  "__** Empty **__",

  
  "__** Empty **__",

  

  "__** You Have Been Found Paper 📃 **__",

  "__** You Have Been Found Nothing 😀 **__",


 " __** You Have Been Found 3 Steal ( <:8_1metalz:1106575990211223642> ) **__",
  

  " __** You Have Been Found 3 Wires **__ (<:8Elctric:1054421747425882182>)",

  " __** You Have Been Found 3 Wires **__ (<:8Elctric:1054421747425882182>)",

  " __** You Have Been Found 3 Wires **__ (<:8Elctric:1054421747425882182>)",


  " __** You Have Been Found 5 Plastic **__ (<:8Blastic:1054421302506684436>)",


  "__** You Have Been Found 5 Steal ( <:8_1metalz:1106575990211223642> ) **__",


  "__** You Have Been Found 5 Copper ( <:8_1Metals:1106575867628507187> ) **__",
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("/تجميع")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(messages[Math.floor(Math.random() * messages.length)])
      ]
    })
  }
})

// سمك

let SM = [
  "__** You Have Been Found a Fish **__ (🐟)",

  "__** You Have Been Found a Fish **__ (🐟)"
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Fishing")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(SM[Math.floor(Math.random() * SM.length)])
      ]
    })
  }
})

////////// خشب

let K = [
  "__** You Have Been Got a Wood **__ (🪵)",

  "__** You Have Been Got a Wood **__ (🪵)",

  "__** You Have Been Got a Wood **__ (🪵)",

  "__** You failed to assemble the wood**__ (❌)    __ you look very weak 🫢 __"
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Wooding")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(K[Math.floor(Math.random() * K.length)])
      ]
    })
  }
})

//////////

client.on('messageCreate', message => { //
  if (message.content === '/Store-Lockpicking') {
    const channel = client.channels.cache.get('1231381284245209168');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage('https://media.discordapp.net/attachments/1133433706036592831/1171589264681750658/C78CB64E-4BA3-41BA-A599-4323B5634FB8.jpg?ex=655d3a87&is=654ac587&hm=3f13fb9e1b7f0d38a4bae7c600204e343a6385a1c4a57bdc5b3736a3a0fa17bf&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699448619110512>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});

client.on('messageCreate', message => { //
  if (message.content === '/House-Safe') {
    const channel = client.channels.cache.get('1216870929997758521');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171586771503562842/IMG_1946.png?ex=655d3835&is=654ac335&hm=154b920f2525947b4c99b0f07a054cd4d03a021d842a19eea69e41979dd821f3&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699448619110512>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});


client.on('messageCreate', message => { //
  if (message.content === '/House-Lockpicking') {
    const channel = client.channels.cache.get('1231381284245209168');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171586771503562842/IMG_1946.png?ex=655d3835&is=654ac335&hm=154b920f2525947b4c99b0f07a054cd4d03a021d842a19eea69e41979dd821f3&= ')
    
            .setTimestamp();

          channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699448619110512>  `}); // يتم إرسال Embed إلى القناة المحدد 
       } 
      });

client.on('messageCreate', message => { //
  if (message.content === '/Fleeca-Hack') {
    const channel = client.channels.cache.get('1231381284245209168');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171587499420811314/IMG_1945.png?ex=655d38e2&is=654ac3e2&hm=57714d96fdf2824bbe2bedc8b8148c384455a8831a7df2b521fefb75a8d6f81b&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699448619110512>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});

client.on('messageCreate', message => { //
  if (message.content === '/ATM-Hack') {
    const channel = client.channels.cache.get('1231381284245209168');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage('https://media.discordapp.net/attachments/1143418695209717882/1171244400186241034/IMG_1947.png')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699448619110512>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});

client.on('messageCreate', message => { //
  if (message.content === '/997') {
    const channel = client.channels.cache.get('1231387273916846121');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171592141785546902/4024DF5C-E7B3-41D1-9BD5-A6B3FED5B658.jpg?ex=655d3d35&is=654ac835&hm=d233ba7b2e4fddb7458a6bc43dc3ced80f1c420bbe761b9166ec49127d6ab5a7&=')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699448619110512>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});

client.on('messageCreate', message => { //
  if (message.content === '/911') {
    const channel = client.channels.cache.get('1231381284245209168');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171592141785546902/4024DF5C-E7B3-41D1-9BD5-A6B3FED5B658.jpg?ex=655d3d35&is=654ac835&hm=d233ba7b2e4fddb7458a6bc43dc3ced80f1c420bbe761b9166ec49127d6ab5a7&=')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699448619110512>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});

client.on('messageCreate', message => { //
  if (message.content === '/𝖵angelico-Hack') {
    const channel = client.channels.cache.get('1231381284245209168');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171586660136386710/IMG_1943.png?ex=655d381a&is=654ac31a&hm=2f4ee9bc877866896e46c6e532343333a1bf2152a011d03e69d774f1035f7e9b&=)
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1222699482085593159>`}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});
   
  client.login(process.env.token);
