const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require('node-fetch')
const prefix = 'y!'
const misterDisc = 689661065872670767
const JaruCom = 728775383943610438
const safety8 = 730976964789403710
const betaServer = 715003574190604371
const noPermsEmbed = new Discord.MessageEmbed()
 .setColor('0dff00')
 .setTitle('Inssuficient Perms')
 .setDescription('Sorry, but you do not have the required permissions!')
 .setFooter('API developed by misterdepth')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity('y!help | v1.0.1', {
        type:'WATCHING'
    })
})

client.on('message', function(message) {
    if(message.content == 'y!help') {
        if(message.author.bot) return;
        const youelpEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Commands and Help Menu')
         .setDescription('WhyBot is a bot used for moderation and other events.')
         .addField('**y!quote**', 'Get a  quote from the dev.', true)
         .addField('**y!meme**', 'Memes.', true)
         .addField('**y!feedback**', 'Give us feedback!', true)
         .addField('**y!modhelp**', 'For administrators.', true)
         .addField('**y!info**', 'Check out some information on the bot.', true)
         .addField('**y!question**', 'Be asked a question by the bot.', true)
         .addField('**y!invite**', 'Get the invite link for WhyBot.', true)
         .addField('**y!roses**', 'Get a roses are red poem.', true)
         .addField('**y!userinfo**', 'Get a user\'s information.', true)
         .addField('**y!betterbotlogs**', 'See information about BetterBotLogs!', true)
         .addField('**y!guess**', 'Try to guess the bot\'s number!', true)
         .addField('**y!ping**', 'See the bot\'s latency!', true)
         .addField('**y!fight**', 'Fight another user!', true)
         .addField('**y!content**', 'The help menu for content!', true)
         .addField('**y!animals**', 'Animal command help menu!', true)
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:youelpEmbed})
    }
})
client.on('message', async (msg) =>{
    if(msg.content.startsWith('y!purge')) {
        if(msg.author.bot) return;
        if(msg.channel.type == "dm") {
            msg.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(!msg.guild.me.hasPermission('MANAGE_MESSAGES')) {
            msg.channel.send('Woops! I can\'t use this command here! Please give me the `MANAGE_MESSAGES` Permission!')
        } else {
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) {
            msg.channel.send({embed:noPermsEmbed})
        } else {
            const args = msg.content.split(' ').slice(1)
            const amount = args.join(' ')
            if (!amount) return msg.reply('You haven\'t given an amount of messages which should be deleted!')
            if (isNaN(amount)) return msg.reply('The amount parameter isn`t a number!')
            if (amount > 100) return msg.reply('You can`t delete more than 100 messages at once!')
            if (amount < 1) return msg.reply('You have to delete at least 1 message!')
            await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
                msg.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
            )});
        }
    }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!changelog') {
        if(message.author.bot) return;
        const changelogEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Changelog')
         .setDescription('Check out all of the new features in WhyBot updates.')
         .addField('Changelog:', `1.0.1
    - Added y!youtube
    - Fixed a few bugs
    - Made a few things smoother`)
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:changelogEmbed})
    }
})
client.on('message', function(message) {
    if(message.content == 'y!info') {
        if(message.author.bot) return;
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('0dff00')
        .setTitle('WhyBot Information')
        .setDescription('Here is the information about this bot!')
        .addField('What is WhyBot?', 'WhyBot is a general reason bot that is mainly used for things on one server.')
        .addField('Is WhyBot public?', 'Yes! It is! Do y!invite to get the link!')
        .addField('What are all of the commands?', 'Use y!help to check out all of the commands!')
        .addField('What is the current prefix?', 'It is \'y!\'')
        .addField('What was added?', 'Use y!changelog to find that out!')
        .addField('How many servers does this bot have?', `WhyBot is in ${client.guilds.cache.size} servers, and is watching over ${client.users.cache.size} users!`)
        .setFooter('API developed by misterdepth')
        message.channel.send({embed:infoEmbed})
    }
})
client.on('message', function(message) {
    if(message.content == 'y!quote') {
        if(message.author.bot) return;
        let randomQuote = Math.floor(Math.random()*15+1)
        switch(randomQuote) {
            case 1:
                message.channel.send('What was the point of a channel about building houses?')
                break
            case 2:
                message.channel.send('This bot had to go through 2 different name changes! I am very bad at making deciscions.')
                break
            case 3:
                message.channel.send('Originally, this was an if/then set of statements, but I made it a switch/case!')
                break
            case 4:
                message.channel.send('Giga pudding! What the hell is that ad?')
                break
            case 5:
                message.channel.send('I\'m struggling to make all these quotes.')
                break
            case 6:
                message.channel.send('The original purpose of this bot was to moderate a single server. Now it is in maybe 10!')
                break 
            case 7:
                message.channel.send('MEE6 is a bad bot. So is Carlbot. YAGPDB is a decent one tho.')
                break 
            case 8:
                message.channel.send('The more difficult aspect of coding a discord bot: Motivation.')
                break 
            case 9:
                message.channel.send('Hi! If you\'re seeing this, then my number generator rolled a 9!')
                break 
            case 10:
                message.channel.send('Send food. I have gone 19 days without food. Send help')
                break
            case 11:
                message.channel.send('There are over 800 lines of code in this file and growing!')
                break 
            case 12:
                message.channel.send('Shoutout to Lieutenant Chicken for supporting this bot!')
                break 
            case 13:
                message.channel.send('Why is "lol" said how it looks in our brains, but "wtf" isn\'t?')
                break 
            case 14:
                message.channel.send("Node Error: Loud != Funny")
                break 
            case 15:
                message.channel.send('Did you know that Terraria and Minecraft both support each other? You most likely did')
                break          
            }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!meme') {
        if(message.author.bot) return;
       const randomMeme = Math.floor(Math.random()*20+1)
       switch(randomMeme) {
           case 1:
               message.channel.send({files:['https://cdn.discordapp.com/attachments/708460664380719154/732083027877822524/received_3439646952754765.jpg']})
               break
            case 2:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/565628173425967115/736373324354945175/image0.png']})
                break
            case 3:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/494415269796511745/736304432324542604/image0-4.png']})
                break
            case 4:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/708997379264610374/736260431177580608/image0.jpg']})
                break
            case 5:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/708997379264610374/735951324411330570/322fec8efe2abb619c32fff0b1010628.jpg']})
                break
            case 6:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/662724233578676284/736881903713517628/Screenshot_20200726-114201_Reddit.jpg']})
                break 
            case 7:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/662724233578676284/736980450660188180/meme-man-8.png']})
                break 
            case 8:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/662724233578676284/736981016920719520/Screenshot_20190809-172917.jpg']})
                break 
            case 9:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/385837258768515083/736991164141404271/Screenshot_20200725-235257.png']})
                break 
            case 10:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/708997379264610374/736738559184338974/image0.jpg']})
                break
            case 11:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739533868964511774/no1.PNG']})
                break 
            case 12:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739533989525585930/furries_be_stronk.PNG']})
                break
            case 13:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739534005019475968/so_true.png']})
                break
            case 14:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739534035037978704/funnibone.PNG']})
                break
            case 15:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739534232174723102/fitnes.PNG']})
                break
            case 16:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739534040041914418/villan.PNG']})
                break 
            case 17:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739533999319416852/cananda.PNG']})
                break 
            case 18:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739534219172249691/chessbord.PNG']})
                break 
            case 19:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/708997379264610374/740946643620462592/20200806_155555.jpg']})
                break 
            case 20:
                message.channel.send({files:['https://cdn.discordapp.com/attachments/709248440797757511/739533915152449607/tetris.png']})
                break 

       }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!feedback')) {
        if(message.author.bot) return;
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        let args = message.content.split('y!feedback ').slice(1)
        if(!args[0]) {
            message.reply('Please supply some feedback!')
        } else {
        console.log(message.author.username + ' suggested ' + args[0])
        message.delete()
        message.channel.send('Thank you for your feedback!')
        }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!kill') {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.bot) return;
        if(message.member.id != "315173627232518147") {
            message.channel.send({embed:noPermsEmbed})
        } else {
            client.destroy()
        }
    }
  })
client.on('message', function(message) {
    if(message.content == 'y!modhelp') {
        if(message.author.bot) return;
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed}) 
        } else {
            const modEmbedHelp = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('WhyBot Moderation Help')
            .setDescription('For administrators and stuff.')
            .addField('Admin Only Commands: ', 'Commands that can only be used by members with the administrator permissions.')
            .addField('**y!channel**', 'Edit channel permissions!', true)
            .addField('Moderators Only: ', 'Commands only for people with the "manage messages" perms.')
            .addField('**y!poll**', 'Create a poll! Use the syntax!', true)
            .setFooter('API developed by misterdepth')
        message.channel.send({embed:modEmbedHelp})
        }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!depth') {
        if(message.author.bot) return;
        const socialEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('Depth\'s Socials:')
         .setDescription('Here are all of Depth\'s socials!')
         .addField('YouTube:', 'https://www.youtube.com/channel/UCY3uJvG0zTYLw8JErrtJDhA')
         .addField('Twitch:', 'https://twitch.tv/misterdepth')
         .addField('Discord:', 'https://discord.gg/bHqwhVm')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:socialEmbed})
    }
})
client.on('message', function(message) {
    if(message.content == 'y!question') {
        if(message.author.bot) return;
        let randomQuiz = Math.floor(Math.random()*15+1)
        switch(randomQuiz) {
            case 1:
                message.channel.send('**Question:** Apples or Oranges?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 2:
                message.channel.send('**Question:** CoronaBot or WhyBot?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 3:
                message.channel.send('**Question:** YouTube or Twitch?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 4:
                message.channel.send('**Question:** Inside or Outside?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break 
            case 5:
                message.channel.send('**Question:** AC or Mechanical Fans?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break 
            case 6:
                message.channel.send('**Question:** Singing or Dancing?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break 
            case 7:
                message.channel.send('**Question:** Tacos or Hamburgers?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break 
            case 8:
                message.channel.send('**Question:** Teleportation or Flying?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 9:
                message.channel.send('**Question:** Strawberries or Bananas?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 10:
                message.channel.send('**Question:** Salted Crackers or Unsalted Crackers?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 11:
                message.channel.send('**Question:** Anime or Regular Cartoons?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 12:
                message.channel.send('**Question:** Grapes or Raisins?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 13:
                message.channel.send('**Question:** Night or Day?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 14:
                message.channel.send('**Question:** Java or Python?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
            case 15:
                message.channel.send('**Question:** Harry Potter or Percy Jackson?').then(msg => {
                    msg.react("🇦")
                    msg.react("🇧")
                })
                break
        }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!bald') {
        message.channel.send('Bald Splashes is amazing, you should join it at discord.gg/bald')
    }
})
client.on('message', function(message) {
    if(message.content == 'y!invite') {
        if(message.author.bot) return;
        const inviteEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Invite Link')
         .setDescription('Here is the Invite Link for WhyBot!')
         .addField('Bot Invite:', '[Click here](https://discord.com/oauth2/authorize?client_id=722141994184474744&scope=bot&permissions=8)')
         .addField('Support Server Invite:', '[WhyBot Support Server](https://discord.com/invite/9JhEsHe)')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:inviteEmbed})
    }
})
client.on('messageDelete', (messageDelete) => {
    if(messageDelete.channel.type == "dm") return;
    if(messageDelete.guild.id != misterDisc) {
        return
    } else {
        if(messageDelete.content.startsWith('y!poll')) return;
        if(messageDelete.content.startsWith('y!feedback')) return;
                const channel = client.channels.cache.get('724337351936966727');  
                if(messageDelete.author.bot) return;
                const deleteEmbed = new Discord.MessageEmbed()
                 .setColor('0dff00')
                 .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
                 .setThumbnail(messageDelete.author.displayAvatarURL())
                 .setTitle('A Message was Deleted!')
                 .setDescription(`Content: ${messageDelete.content}\nSent By: ${messageDelete.author}\nChannel: ${messageDelete.channel}`)
                channel.send({embed:deleteEmbed})
    }
})

client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.channel.type == "dm") return;
    if(newMessage.guild.id != misterDisc) {
        return
    } else {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    const channel = client.channels.cache.get('724337351936966727');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}\nNew Content: ${newMessage.content}\nChannel: ${newMessage.channel}\nSent By: ${newMessage.author}`)
    channel.send({embed:editEmbed})
    }
   }); 
client.on('message', function(message) {
    if(message.content == 'y!roses') {
        if(message.author.bot) return;
        let randomRoses = Math.floor(Math.random()*5+1)
        switch(randomRoses) {
            case 1:
                message.channel.send(`Roses are red, fluttering like a bee...
                Logal Paul Says:
                Is that a body?`)
                break
            case 2:
                message.channel.send('Roses are red, quiet as a mouse, your door is unlocked...')
                setTimeout(function() {message.channel.send('I        a   m        i   n   s   i   d   e        y   o   u   r        h   o   u   s   e.')}, 3000)
                break
            case 3:
                message.channel.send('Roses are gray, violets are gray.')
                setTimeout(function() {message.channel.send('wait am i gay')}, 3000)
                break
            case 4:
                message.channel.send('Roses are red, so is your blood, haha bottle of rubbing alcohol go chug chug chug')
                break
            case 5:
                message.channel.send('Roses are red, I\'m running out of ideas...')
                setTimeout(function() {message.channel.send('no actually')}, 3000)
                break
        }
    }
})
client.on("messageDelete", (messageDelete) => {
    if(messageDelete.channel.type == "dm") return;
    if(messageDelete.guild.id != JaruCom) {
        return
    } else {
        if(messageDelete.content.startsWith('y!poll')) return;
        if(messageDelete.content.startsWith('y!feedback')) return;
    const channel = client.channels.cache.get('728780814665515029');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}\nSent By: ${messageDelete.author}\nChannel: ${messageDelete.channel}`)
    channel.send({embed:deleteEmbed})
    }
})

client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.channel.type == "dm") return;
    if(newMessage.guild.id != JaruCom) {
        return
    } else {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    const channel = client.channels.cache.get('728780814665515029');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}\nNew Content: ${newMessage.content}\nChannel: ${newMessage.channel}\nSent By: ${newMessage.author}`)
    channel.send({embed:editEmbed})
    }
   });

   client.on("messageDelete", (messageDelete) => {
    if(messageDelete.channel.type == "dm") return;
    if(messageDelete.guild.id != safety8) {
        return
    } else {
        if(messageDelete.content.startsWith('y!poll')) return;
        if(messageDelete.content.startsWith('y!feedback')) return;
    const channel = client.channels.cache.get('730987813641781248');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}\nSent By: ${messageDelete.author}\nChannel: ${messageDelete.channel}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:deleteEmbed})
    }
})

client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.channel.type == "dm") return;
    if(newMessage.guild.id != safety8) {
        return
    } else {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    const channel = client.channels.cache.get('730987813641781248');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}\nNew Content: ${newMessage.content}\nChannel: ${newMessage.channel}\nSent By: ${newMessage.author}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:editEmbed})
    }
});

client.on('message', function(message) {
    if(message.content.startsWith('y!userinfo')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.bot) return;
        let mentionDude = message.mentions.users.first()
        if(!mentionDude) {
            let authorTag = message.author.tag
            let tagAuthor = authorTag.split('#').slice(1)
            let roles = []
            message.member.roles.cache.map(role => {
              if (role.name !== "@everyone"){
               roles.push(`• ${role.name}`) 
              }
            });
            const oneUserInfo = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('User Information: ' + message.author.username)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('Here is the information for this user.')
            .addField('Username:', message.author.username)
            .addField('Tag:', tagAuthor[0])
            .addField('ID:', message.author.id)
            .addField('Roles:', roles)
            .setFooter('API developed by misterdepth')
        message.channel.send({embed:oneUserInfo})
        } else {
            let mentionTag = mentionDude.tag
            let tagMention = mentionTag.split('#').slice(1)
            let mentionMember = message.mentions.members.first()
            let roles2 = []
            mentionMember.roles.cache.map(role => {
              if (role.name !== "@everyone"){
               roles2.push(`• ${role.name}`) 
              }
            });
            const otherUserInfo = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('User Information: ' + mentionDude.username )
            .setThumbnail(mentionDude.displayAvatarURL())
            .setDescription('Here is the information for this user.')
            .addField('Username:', mentionDude.username)
            .addField('Tag:', tagMention[0])
            .addField('ID:', mentionDude.id)
            .addField('Roles:', roles2)
            .setFooter('API developed by misterdepth')
        message.channel.send({embed:otherUserInfo})
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!poll')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.bot) return;
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
        const args = message.content.split('/').slice(1)
        if(!args[0] || !args[1] || !args[2]) {
            message.channel.send(`Please use the format:
y!poll/question/answer1/answer2/OPTIONALanswer3/OPTIONALanswer4`)
        } else {
            if(!args[3]) {
            const pollEmbed = new Discord.MessageEmbed()
             .setColor('0dff00')
             .setTitle('Poll Time!')
             .setDescription('Poll by ' + message.author.tag + '!')
             .addField(`${args[0]}`, `1. ${args[1]}
2. ${args[2]}`)
            .addField('Vote Now!', 'Vote by reacting with the emojis!')
            .setFooter('API developed by misterdepth')
            message.delete()
            message.channel.send({embed:pollEmbed}).then(sentEmbed => {
                sentEmbed.react("1️⃣")
                sentEmbed.react("2️⃣")
        })
    } else {
        if(!args[4]) {
            const pollEmbed = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('Poll Time!')
            .setDescription('Poll by ' + message.author.tag + '!')
            .addField(`${args[0]}`, `1. ${args[1]}
2. ${args[2]}
3. ${args[3]}`)
           .addField('Vote Now!', 'Vote by reacting with the emojis!')
           .setFooter('API developed by misterdepth')
           message.delete()
           message.channel.send({embed:pollEmbed}).then(sentEmbed => {
               sentEmbed.react("1️⃣")
               sentEmbed.react("2️⃣")
               sentEmbed.react("3️⃣")
       })
        } else {
            const pollEmbed = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('Poll Time!')
            .setDescription('Poll by ' + message.author.tag + '!')
            .addField(`${args[0]}`, `1. ${args[1]}
2. ${args[2]}
3. ${args[3]}
4. ${args[4]}`)
           .addField('Vote Now!', 'Vote by reacting with the emojis!')
           .setFooter('API developed by misterdepth')
           message.delete()
           message.channel.send({embed:pollEmbed}).then(sentEmbed => {
               sentEmbed.react("1️⃣")
               sentEmbed.react("2️⃣")
               sentEmbed.react("3️⃣")
               sentEmbed.react("4️⃣")
       })
        }
    }
    }
    }
}
})
client.on('message', function(message) {
    if(message.content.startsWith('y!betterbotlogs')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.bot) return;
        const args = message.content.split(' ').slice(1)
        if(!args[0]) {
            const BotLogEmbed = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('BetterBotLogs Information:')
            .setImage('https://cdn.discordapp.com/attachments/715386760317894757/736681429748154418/unknown.png')
            .setDescription('BetterBotLogs is a way of logging actions in the server, being precise and careful.')
            .addField('Features: ', `- Seeing Deleted Messages
   - Seeing Edited Messages
   
   More to come! This bot is still in development!`)
            .addField('How Can I Get BetterBotLogs?', 'BetterBotLogs takes some private development, so it might take a while. But do y!betterbotlogs request to request it!')
            .setFooter('API developed by misterdepth')
           message.channel.send({embed:BotLogEmbed})
        } else {
            if(args[0] == 'request') {
                if(!message.member.hasPermission('ADMINISTRATOR')) {
                    message.channel.send({embed:noPermsEmbed})
                } else {
                message.reply('Confirming request...\n'
                    + 'Are you sure you want to send a request? Logs will appear in this channel!');
                    message.react('👍').then(r => {
                        message.react('👎');
                    });
                    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                        { max: 1, time: 10000 }).then(collected => {
                            if (collected.first().emoji.name == '👍') {
                                const theChannel = message.channel.id
                                const theGuild = message.guild.id
                                console.log(message.author.tag + ' requested BetterBotLogs! The Channel is ' + theChannel + ' and the guild is ' + theGuild + '!')
                                message.channel.send(`:mailbox_with_mail: Request sent! Please await the logs to appear!
Join the support server to keep everything updated!
Invite: https://discord.com/invite/9JhEsHe`)
                            } else
                                message.reply('Request cancelled!');
                                }).catch(() => {
                                    message.reply('You didn\'t react! Request cancelled!');
                                }); 
                            }
            } else {
                const BotLogEmbed = new Discord.MessageEmbed()
                .setColor('0dff00')
                .setTitle('BetterBotLogs Information:')
                .setImage('https://cdn.discordapp.com/attachments/715386760317894757/738532821802418176/unknown.png')
                .setDescription('BetterBotLogs is a way of logging actions in the server, being precise and careful.')
                .addField('Features: ', `- Seeing Deleted Messages
       - Seeing Edited Messages
       
       More to come! This bot is still in development!`)
                .addField('How Can I Get BetterBotLogs?', 'BetterBotLogs takes some private development, so it might take a while. But do y!betterbotlogs request to request it!')
                .setFooter('API developed by misterdepth')
               message.channel.send({embed:BotLogEmbed})
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!channel')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.bot) return;
        const args = message.content.split(' ').slice(1)
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) {
                message.channel.send('Woops! Looks like I can\'t use this command! Please give me the `MANAGE_CHANNELS` permission!')
            } else {
            switch(args[0]) {
                case "visible":
                    const channelVis = client.channels.cache.get(message.channel.id);  
                    channelVis.updateOverwrite(channelVis.guild.roles.everyone, { VIEW_CHANNEL: true })
                    message.channel.send('Channel is now visible!')
                    break 
                case "invisible":
                    const channelInvis = client.channels.cache.get(message.channel.id);  
                    channelInvis.updateOverwrite(channelInvis.guild.roles.everyone, { VIEW_CHANNEL: false })
                    message.channel.send('Channel is now invisible! Ninja mode!')
                    break 
                case "close":
                    const channelNosend = client.channels.cache.get(message.channel.id);  
                    channelNosend.updateOverwrite(channelNosend.guild.roles.everyone, { SEND_MESSAGES: false })
                    message.channel.send('Channel is now closed!')
                    break
                case "open":
                    const channelSend = client.channels.cache.get(message.channel.id);  
                    channelSend.updateOverwrite(channelSend.guild.roles.everyone, { SEND_MESSAGES: true })
                    message.channel.send('Channel is now open!')
                    break 
                case "images":
                    const channelImages = client.channels.cache.get(message.channel.id)
                    channelImages.updateOverwrite(channelImages.guild.roles.everyone, { ATTACH_FILES : true })
                    message.channel.send('You can now send images in this channel!')
                    break 
                case "text":
                    const channelNoImages = client.channels.cache.get(message.channel.id)
                    channelNoImages.updateOverwrite(channelNoImages.guild.roles.everyone, { ATTACH_FILES : false })
                    message.channel.send('You can no longer send images in this channel!')
                    break 
                default:
                    message.channel.send(`Please supply a valid option! Options:
    - Visible (allows members to see)
    - Invisible (disallows members to see)
    - Open (allows members to send messages)
    - Close (disallows members to send messages)
    - Images (allows members to send images)
    - Text (disallows members to send images)
All lowercase!`)
                    
            }
        }
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!superior')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.member.id != "323212867757277185") {
            message.channel.send({embed:noPermsEmbed})
        } else {
            let inferiorMan = message.mentions.users.first();
            if(!inferiorMan) {
                message.reply('Respond with someone to superior nerd')
            } else {
                const args = message.content.split(' ').slice(1)
                message.reply(' you are superior to ' + args[0] + '!')
            }
        }
    }
})

client.on('message', function(message) {
    if(message.content.startsWith('y!guess')) {
        if(message.author.bot) return;
        const args = message.content.split(' ').slice(1)
        if(!args[0]) {
            message.channel.send('Please supply a number 1-10! Ex: y!guess 4')
        } else {
            const computerNumber = Math.floor(Math.random()*10+1)
            const playerNumber = args[0]
            if(isNaN(playerNumber)) {
                message.channel.send('Please supply a number 1-10! Ex: y!guess 4')
            } else if(playerNumber > 10) {
                message.channel.send('Please supply a number 1-10! Ex: y!guess 4')
            } else if(playerNumber < 1) {
                message.channel.send('Please supply a number 1-10! Ex: y!guess 4')
            } else {
                if(computerNumber == playerNumber) {
                    message.channel.send(':tada: You guessed the number correctly! The number was ' + computerNumber + '! :tada:')
                } else if(computerNumber != playerNumber) {
                    message.channel.send(':x: You did not guess the number! The number was ' + computerNumber + '! :x:')
                }
            }
        }
    }
})
client.on("messageDelete", (messageDelete) => {
    if(messageDelete.channel.type == "dm") return;
    if(messageDelete.guild.id != 670028957772414996) {
        return
    } else {
        if(messageDelete.content.startsWith('y!poll')) return;
        if(messageDelete.content.startsWith('y!feedback')) return;
    const channel = client.channels.cache.get('737090606672642050');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}\nSent By: ${messageDelete.author}\nChannel: ${messageDelete.channel}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:deleteEmbed})
    }
})
client.on('message', function(message) {
    if(message.content == 'y!ping') {
        if(message.author.bot) return;
        const botping = new Date() - message.createdAt;
        const pingEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Latency')
         .setDescription('Here is the WhyBot Ping!')
         .addField(':bell: Ping:', `${botping}ms`)
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:pingEmbed})
    }
})
client.on("messageDelete", (messageDelete) => {
    if(messageDelete.channel.type == "dm") return;
    if(messageDelete.guild.id != 707985845197602847) {
        return
    } else {
        if(messageDelete.content.startsWith('y!poll')) return;
        if(messageDelete.content.startsWith('y!feedback')) return;
    const channel = client.channels.cache.get('712826746843430913');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}\nSent By: ${messageDelete.author}\nChannel: ${messageDelete.channel}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:deleteEmbed})
    }
})
client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.channel.type == "dm") return;
    if(newMessage.guild.id != 707985845197602847) {
        return
    } else {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    const channel = client.channels.cache.get('712826746843430913');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}\nNew Content: ${newMessage.content}\nChannel: ${newMessage.channel}\nSent By: ${newMessage.author}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:editEmbed})
    }
   });
client.on('message', function(message) {
    if(message.content.startsWith('y!fight')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.bot) return;
        let enemy = message.mentions.users.first()
        if(!enemy) {
            message.reply('Please supply someone to fight!')
        } else {
            if(enemy.bot) {
                let botOutcomes = Math.floor(Math.random()*5+1)
                switch(botOutcomes) {
                    case 1:
                        message.channel.send(`${message.author} tries to fight ${enemy}, but the super mega lasers of the robot destroy ${message.author}`)
                        break 
                    case 2:
                        message.channel.send(`${message.author} invents an accurate algorithm to help beat ${enemy}, but the bot easily bypasses all outcomes and beats ${message.author}!`)
                        break 
                    case 3:
                        message.channel.send(`${enemy} uses its heavy platings of metal in order to deflect all attacks from ${message.author}!`)
                        break 
                    case 4:
                        message.channel.send(`${message.author} brings on an army to defeat ${enemy}, but ${enemy}, being a robot, destroys them all!`)
                        break 
                    case 5:
                        message.channel.send(`${enemy} bypasses all attacks by being a robot.`)
                        break 
                }
            } else {
            let randomFightOutcome = Math.floor(Math.random()*10+1)
            switch(randomFightOutcome) {
                case 1:
                    message.channel.send(`${message.author.username} swings in, kicking hard, however ${enemy.username} wins the fight by barely a hit!`)
                    break 
                case 2:
                    message.channel.send(`Ez! ${message.author.username} easily wins the fight by intimidating ${enemy.username}!`)
                    break
                case 3:
                    message.channel.send(`${enemy.username} fights hard and strong, but with a few easy taps ${message.author.username} wins the battle.`)
                    break 
                case 4:
                    message.channel.send(`${enemy.username} uses a gang of sewer rats to chase away ${message.author.username}!`)
                    break
                case 5:
                    message.channel.send(`${message.author.username} roundhouse kicks ${enemy.username}, sending him flying into the wall!`)
                    break
                case 6:
                    message.channel.send(`${enemy.username} combos ${message.author.username} so hard that they fly into oblivion!`)
                    break 
                case 7:
                    message.channel.send(`${message.author.username} taps ${enemy.username} with a finger, blasting him into space.`)
                    break 
                case 8:
                    message.channel.send(`With the power of penguins, ${enemy.username} intimidates ${message.author.username} into becoming part of the penguin gang!`)
                    break 
                case 9:
                    message.channel.send(`Coding a sweet algorithm to predict ${message.author.username}'s moves, ${enemy.username} takes home the victory.`)
                    break 
                case 10:
                    message.channel.send(`${enemy.username} leaves the arena and ${message.author.username} wins! What a coward ${enemy.username} is!`)
                    break 
            }
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!log')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.id != "315173627232518147") {
            message.channel.send({embed:noPermsEmbed})
        } else {
            let args = message.content.split(' ').slice(1)
            let logInfo = args.slice(1).join(' ')
            if(!args[0]) {
                message.reply('Please supply a category to log!')
            } else {
                if(!logInfo) {
                    message.reply(`Please reply with something to log ${args[0]} with!`)
                } else {
                    message.channel.send(`\`\`\`
Info Logged at ${message.createdAt}:
    Category: ${args[0]}
    Logging Info: ${logInfo}
    Logged By: ${message.author.tag}
    
Log Status: Successful!
\`\`\``)
                    console.log(`Info Logged at ${message.createdAt}:
    Category: ${args[0]}
    Logging Info: ${logInfo}
    Logged By: ${message.author.tag}`)
                }
            }
        }   
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!content')) {
        if(message.channel.type == "dm") return;
        if(message.author.bot) return;
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            const contentHelpMenu = new Discord.MessageEmbed()
             .setColor('0dff00')
             .setTitle('WhyBot Content Help Menu')
             .setDescription('Here are some content commands!')
             .addField('**y!twitch**', 'Display when you are live on twitch!', true)
             .addField('**y!youtube**', 'Display when you upload a video on YouTube!', true)
             .setFooter('API developed by misterdepth')
            message.channel.send({embed:contentHelpMenu})
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!twitch')) {
        if(message.channel.type == "dm") return;
        if(message.author.bot) return;  
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            const args = message.content.split(' ').slice(1)
            const roleName = args.slice(2).join(' ')
            if(!args[0]) {
                message.channel.send('Invalid Usage! Please provide your Twitch Username! Ex: `y!twitch <IGN:Text> <Channel:Channel> <Ping:RoleName>`')
            } else if(!args[1]) {
                message.channel.send('Invalid Usage! Please provide a channel! Ex: `y!twitch <IGN:Text> <Channel:Channel> <Ping:RoleName>`')
            } else if(!roleName) {
                message.channel.send('Invalid Usage! Please provide a role! Ex: `y!twitch <IGN:Text> <Channel:Channel> <Ping:RoleName>`')
            } else {
                const theChannel = args[1].replace('#', '').replace('<', '').replace('>', '')
                const channel = client.channels.cache.get(theChannel)
                const serverGuild = message.guild
                const role = serverGuild.roles.cache.find(role => role.name === `${roleName}`);
                if(!channel) {
                    message.reply('Could not find that channel!')
                } else if(!role) {
                    message.reply('Could not find this role! (This only works with Server Roles, not everyone/here!)')
                } else {
                    channel.send(`Hey! **${args[0]}** is now live on https://twitch.tv/${args[0]} ! Go watch! ${role}`)
                }
            }
        }
    }
})
client.on("messageDelete", (messageDelete) => {
    if(messageDelete.channel.type == "dm") return;
    if(messageDelete.guild.id != 741043961736462386) {
        return
    } else {
        if(messageDelete.content.startsWith('y!poll')) return;
        if(messageDelete.content.startsWith('y!feedback')) return;
    const channel = client.channels.cache.get('741055677388292226');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}\nSent By: ${messageDelete.author}\nChannel: ${messageDelete.channel}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:deleteEmbed})
    }
})
client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.channel.type == "dm") return;
    if(newMessage.guild.id != 741043961736462386) {
        return
    } else {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    const channel = client.channels.cache.get('741055677388292226');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}\nNew Content: ${newMessage.content}\nChannel: ${newMessage.channel}\nSent By: ${newMessage.author}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:editEmbed})
    }
});
client.on('message', function(message) {
    if(message.content.startsWith('y!youtube')) {
        if(message.channel.type == "dm") return;
        if(message.author.bot) return;  
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            const args = message.content.split(' ').slice(1)
            const roleName = args.slice(3).join(' ')
            if(!args[0]) {
                message.channel.send('Invalid Usage! Please provide your Youtube Username! Ex: `y!youtube <IGN:Text> <Channel:Channel> <URL:Link> <Ping:RoleName>`')
            } else if(!args[1]) {
                message.channel.send('Invalid Usage! Please provide a channel! Ex: `y!youtube <IGN:Text> <Channel:Channel> <URL:Link> <Ping:RoleName>`')
            } else if(!args[2]) {
                message.channel.send('Invalid usage! Please provide the video URL! Ex: `y!youtube <IGN:Text> <Channel:Channel> <URL:Link> <Ping:RoleName>`')
            } else if(!roleName) {
                message.channel.send('Invalid Usage! Please provide a role! Ex: `y!youtube <IGN:Text> <Channel:Channel> <URL:Link> <Ping:RoleName>`')
            } else {
                const theChannel = args[1].replace('#', '').replace('<', '').replace('>', '')
                const channel = client.channels.cache.get(theChannel)
                const serverGuild = message.guild
                const role = serverGuild.roles.cache.find(role => role.name === `${roleName}`);
                if(!channel) {
                    message.reply('Could not find that channel!')
                } else if(!role) {
                    message.reply('Could not find this role! (This only works with Server Roles, not everyone/here!)')
                } else if(!args[2].startsWith('https://youtube.com/watch?v=')) {
                    message.reply('This isn\'t a valid YouTube video URL! Please provide a valid **YouTube video URL**.')
                } else {
                    channel.send(`Hey! **${args[0]}** just uploaded a new video ${args[2]} ! Go watch! ${role}`)
                }
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!animals') {
        const animalHelpEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Animal Commands')
         .setDescription('Here are some wholesome commands!')
         .addField('**y!cat**', 'Get an image of a cat!', true)
         .addField('**y!dog**', 'Get an image of a dog.', true)
         .addField('**y!fox**', 'Get an image of a fox!', true)
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:animalHelpEmbed})
    }
})
client.on('message', async function(message) {
    if(message.content == 'y!cat') {
        const obj = await fetch("https://api.thecatapi.com/v1/images/search").then(x => x.json())
        const catURL = obj[0]
        const catEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle(':heart_eyes_cat: Meow!')
         .setImage(catURL.url)
         .setFooter('Images provided by thecatapi.com')
        message.channel.send({embed:catEmbed})
    }
})
client.on('message', async function(message) {
    if(message.content == 'y!dog') {
        const obj = await fetch("https://api.thedogapi.com/v1/images/search").then(x => x.json())
        const dogURL = obj[0]
        const dogEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle(':dog: Woof!')
         .setImage(dogURL.url)
         .setFooter('Images provided by thedogapi.com')
        message.channel.send({embed:dogEmbed})
    }
})
client.on('message', async function(message) {
    if(message.content == 'y!fox') {
        const obj = await fetch("https://randomfox.ca/floof/").then(x => x.json())
        const foxEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle(':fox: Fox!')
         .setImage(obj.image)
         .setFooter('Images provided by randomfox.ca')
        message.channel.send({embed:foxEmbed})
    }
})
client.on('message', async function(message) {
    if(message.content.startsWith('y!mcinfo')) {
        const args = message.content.split(' ').slice(1)
        if(!args[0]) {
            message.reply('You must provide a name!')
        } else if(!isNaN(args[0])) {
            message.reply('This is an invalid name!')
        } else {
            const obj = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then(x => x.json())
            const uuid = obj.id 
            if(!uuid) {
                message.reply('This is an invalid name!')
            } else {
                const nameHistory = await fetch(`https://api.mojang.com/user/profiles/${uuid}/names`).then(x => x.json())
                const nameArray = nameHistory.map(x => x.name).join('\n')
                const thingEmbed = new Discord.MessageEmbed()
                 .setColor('0dff00')
                 .setTitle('Minecraft Information for User')
                 .setThumbnail(`https://crafatar.com/avatars/${uuid}`) 
                 .setDescription('**Past Usernames:**\n ' + nameArray)
                message.channel.send({embed:thingEmbed})
            }

        }
    }
})

client.login(process.env.token)