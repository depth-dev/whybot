const Discord = require('discord.js')
const client = new Discord.Client()
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
    client.user.setActivity('y!help | v0.7.1', {
        type:'WATCHING'
    })
    function randomStatus() {
    let status = ["y!help | v0.7.1", "y!help | Status Pog", "y!help | Very Cool", "y!help | 🎉 GG", "y!help | Having Stroke", "y!help | Minecraft!", "y!help | 10% Status!"]
    let rstatus = Math.floor(Math.random()*status.length)
    client.user.setActivity(status[rstatus], {
        type:'WATCHING'
    })
} setInterval(randomStatus, 40000)
})

client.on('message', function(message) {
    if(message.content == 'y!help') {
        const youelpEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Commands and Help Menu')
         .setDescription('WhyBot is a bot used for moderation and other events.')
         .addField('**y!quote**', 'Get a  quote from the dev.', true)
         .addField('**y!meme**', 'Memes.', true)
         .addField('**y!feedback**', 'Give us feedback!', true)
         .addField('**y!modhelp**', 'For administrators.', true)
         .addField('**y!depth**', 'Check out the dev!', true)
         .addField('**y!info**', 'Check out some information on the bot.', true)
         .addField('**y!remind**', 'Remind someone they exist.', true)
         .addField('**y!question**', 'Be asked a question by the bot.', true)
         .addField('**y!changelog**', 'Check out the changelog for WhyBot.', true)
         .addField('**y!invite**', 'Get the invite link for WhyBot.', true)
         .addField('**y!roses**', 'Get a roses are red poem.', true)
         .addField('**y!userinfo**', 'Get a user\'s information. More coming soon.', true)
         .addField('**y!poll**', 'Create a poll! Currently mods only.', true)
         .addField('**y!betterbotlogs**', 'See information about BetterBotLogs!', true)
         .addField('**y!guess**', 'Try to guess the bot\'s number!', true)
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:youelpEmbed})
    }
})
client.on('message', function(message) {
    if(message.content == 'y!changelog') {
        const changelogEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Changelog')
         .setDescription('Check out all of the new features in WhyBot updates.')
         .addField('Changelog:', `0.7.1
    - Added more memes
    - Added more questions
    - Fixed a few bugs`)
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:changelogEmbed})
    }
})
client.on('message', function(message) {
    if(message.content == 'y!info') {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('0dff00')
        .setTitle('WhyBot Information')
        .setDescription('Here is the information about this bot!')
        .addField('What is WhyBot?', 'WhyBot is a general reason bot that is mainly used for things on one server.')
        .addField('Is WhyBot public?', 'Yes! It is! Do y!invite to get the link!')
        .addField('What are all of the commands?', 'Use y!help to check out all of the commands!')
        .addField('What is the current prefix?', 'It is \'y!\'')
        .addField('What was added?', 'Use y!changelog to find that out!')
        .setFooter('API developed by misterdepth')
        message.channel.send({embed:infoEmbed})
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!kick')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            let unfortunateGuy1 = message.mentions.members.first()
            if(!unfortunateGuy1) {
                message.reply('Please respond with a user to kick!')
            } else {
                const args = message.content.split(' ').slice(1)
                const reason = args.slice(1).join(' ')
                if(!reason) {
                    message.reply('A reason must be set!')
                } else {
                    if(!unfortunateGuy1.kickable) {
                        return message.channel.send('You cannot kick this member!')
                    } else {
                    unfortunateGuy1.kick(message.author.tag + ' kicked for the reason: ' + reason)
                    message.channel.send(unfortunateGuy1.user.tag + ` has been successfully kicked!
Reason: ` + reason)
                    }

                }
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!ban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            let unfortunateGuy2 = message.mentions.members.first()
            if(!unfortunateGuy2) {
                message.reply('Please respond with a user to ban!')
            } else {
                const args = message.content.split(' ').slice(1)
                const reason = args.slice(1).join(' ')
                if(!reason) {
                    message.reply('A reason must be set!')
                } else {
                    if(!unfortunateGuy2.bannable) {
                        return message.channel.send('You cannot ban this member!')
                    } else {
                    unfortunateGuy2.ban(message.author.tag + ' banned for the reason a user.')
                    message.channel.send(unfortunateGuy2.user.tag + ` has been successfully banned! Unban them in the server settings.
Reason: ` + reason)
                    }              
                }
            }
        }
    }
})

client.on('message', async (msg) =>{
    if(msg.content.startsWith('y!purge')) {
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
})
client.on('message', function(message) {
    if(message.content == 'y!quote') {
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
       const randomMeme = Math.floor(Math.random()*10+1)
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
       }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!feedback')) {
        let args = message.content.split('y!feedback ').slice(1)
        console.log(message.author.username + ' suggested ' + args[0])
        message.delete()
        message.channel.send('Thank you for your feedback!')
    }
})
client.on('message', function(message) {
    if(message.content == 'y!kill') {
        if(message.member.id != "315173627232518147") {
            message.channel.send({embed:noPermsEmbed})
        } else {
            client.destroy()
        }
    }
  })
client.on('message', function(message) {
    if(message.content == 'y!modhelp') {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed}) 
        } else {
            const modEmbedHelp = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('WhyBot Moderation Help')
            .setDescription('For administrators and stuff.')
            .addField('Admin Only Commands: ', 'Commands that can only be used by members with the administrator permissions.')
            .addField('**y!kick**', 'Kick a user.', true)
            .addField('**y!ban**', 'Ban a user.', true)
            .addField('**y!channel**', 'Edit channel permissions!', true)
            .addField('**y!mute**', 'Mutes a user', true)
            .addField('**y!unmute**', 'Unmutes a user.', true)
            .addField('\u200b', '\u200b', true)
            .addField('\u200b', '\u200b', true)
            .addField('Moderators Only: ', 'Commands only for people with the "manage messages" perms.')
            .addField('**y!purge**', 'Purge a number of messages.', true)
            .addField('**y!poll**', 'Create a poll! Use the syntax!', true)
            .setFooter('API developed by misterdepth')
        message.channel.send({embed:modEmbedHelp})
        }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!depth') {
        const socialEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('Depth\'s Socials:')
         .setDescription('Here are all of Depth\'s socials!')
         .addField('YouTube:', 'https://www.youtube.com/channel/UCY3uJvG0zTYLw8JErrtJDhA')
         .addField('Twitch:', 'https://twitch.tv/misterdepth')
         .addField('Discord:', 'https://discord.gg/bHqwhVm')
         .setFooter('API developed by misterdepth')
        message.delete()
        message.channel.send({embed:socialEmbed})
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!remind')) {
        let authorGuy = message.author.username
        let recieverGuy = message.mentions.users.first()
        if(!recieverGuy) {
            message.reply('Make sure you include someone in your message!')
        } else {
            recieverGuy.send(authorGuy + ' has reminded you exist. Please thank ' + authorGuy + ' for doing this.')
            message.channel.send('The message has been sent.').then(message => {
                setTimeout(function() {message.delete()}, 3000)
            })
        }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!question') {
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
        const inviteEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Invite Link')
         .setDescription('Here is the Invite Link for WhyBot!')
         .addField('Bot Invite:', '[Click here](https://discord.com/oauth2/authorize?client_id=722141994184474744&scope=bot&permissions=8)')
         .addField('Support Server Invite:', '[Depth\'s Bot Server](https://discord.com/invite/9JhEsHe)')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:inviteEmbed})
    }
})
client.on('messageDelete', (messageDelete) => {
    if(messageDelete.guild.id != misterDisc) {
        return
    } else {
        if(messageDelete.content.startsWith('y!poll')) {
            return
        } else if(messageDelete.content.startsWith('y!feedback')) {
            return
        } else {
                const channel = client.channels.cache.get('724337351936966727');  
                if(messageDelete.author.bot) return;
                const deleteEmbed = new Discord.MessageEmbed()
                 .setColor('0dff00')
                 .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
                 .setThumbnail(messageDelete.author.displayAvatarURL())
                 .setTitle('A Message was Deleted!')
                 .setDescription(`Content: ${messageDelete.content}
            Sent By: ${messageDelete.author}`)
                channel.send({embed:deleteEmbed})
        }
    }
})

client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.guild.id != misterDisc) {
        return
    } else {
    if(oldMessage.author.bot) return;
    const channel = client.channels.cache.get('724337351936966727');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}
     
New Content: ${newMessage.content}
Sent By: ${newMessage.author}`)
    channel.send({embed:editEmbed})
    }
   }); 
client.on('message', function(message) {
    if(message.content == 'y!roses') {
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
    if(messageDelete.guild.id != JaruCom) {
        return
    } else {
        if(messageDelete.content.startsWith('y!feedback')) {
            return
        } else {
    const channel = client.channels.cache.get('728780814665515029');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}
Sent By: ${messageDelete.author}`)
    channel.send({embed:deleteEmbed})
        }
    }
})

client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.guild.id != JaruCom) {
        return
    } else {
    if(oldMessage.author.bot) return;
    const channel = client.channels.cache.get('728780814665515029');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}
     
New Content: ${newMessage.content}
Sent By: ${newMessage.author}`)
    channel.send({embed:editEmbed})
    }
   });

   client.on("messageDelete", (messageDelete) => {
    if(messageDelete.guild.id != safety8) {
        return
    } else {
            if(messageDelete.content.startsWith('y!poll')) {
                return
            } else {
                if(messageDelete.content.startsWith('y!feedback')) {
                    return
                } else {
    const channel = client.channels.cache.get('730987813641781248');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}
Sent By: ${messageDelete.author}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:deleteEmbed})
                }
            }
    }
})

client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.guild.id != safety8) {
        return
    } else {
        if(newMessage.content.includes('rawfishsticks')) {
            return
        } else {
    if(oldMessage.author.bot) return;
    const channel = client.channels.cache.get('730987813641781248');  
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`Old Content: ${oldMessage.content}

New Content: ${newMessage.content}
Sent By: ${newMessage.author}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:editEmbed})
        }
    }
   });

client.on('message', function(message) {
    if(message.content.startsWith('y!userinfo')) {
        let mentionDude = message.mentions.users.first()
        if(!mentionDude) {
            let authorTag = message.author.tag
            let tagAuthor = authorTag.split('#').slice(1)
            const oneUserInfo = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('User Information: ' + message.author.username)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('Here is the information for this user.')
            .addField('Username:', message.author.username)
            .addField('Tag:', tagAuthor[0])
            .addField('ID:', message.author.id)
            .setFooter('API developed by misterdepth')
        message.channel.send({embed:oneUserInfo})
        } else {
            let mentionTag = mentionDude.tag
            let tagMention = mentionTag.split('#').slice(1)
            const otherUserInfo = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('User Information: ' + mentionDude.username )
            .setThumbnail(mentionDude.displayAvatarURL())
            .setDescription('Here is the information for this user.')
            .addField('Username:', mentionDude.username)
            .addField('Tag:', tagMention[0])
            .addField('ID:', mentionDude.id)
            .setFooter('API developed by misterdepth')
        message.channel.send({embed:otherUserInfo})
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!poll')) {
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
Join the test server to keep everything updated!
Invite: https://discord.com/invite/9JhEsHe`)
                            } else
                                message.reply('Request cancelled!');
                                }).catch(() => {
                                    message.reply('You didn\'t react! Request cancelled!');
                                }); 
            } else {
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
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!channel')) {
        const args = message.content.split(' ').slice(1)
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({embed:noPermsEmbed})
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
                default:
                    message.channel.send(`Please supply a valid option! Options:
    - Visible
    - Invisible
    - Close
    - Open
All lowercase!`)
                    
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!superior')) {
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
client.on('message', function(message) {
    if(message.content.startsWith('y!mute')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({noPermsEmbed})
        } else {
            const serverGuild = message.guild
            const role = serverGuild.roles.cache.find(role => role.name === 'Muted');
            const member = message.mentions.members.first();
            if(!role) {
                message.channel.send('Could not find the muted role! Make sure it is called "Muted"!')
            } else if(!member) {
                message.channel.send('Please supply a member to mute!')
            } else if (member.roles.cache.some(role => role.name === 'Muted')) {
                message.channel.send('This user is already muted!')
            } else {
                const args = message.content.split(' ').slice(1)
                const reason = args.slice(1).join(' ')
                if(!reason) {
                    message.channel.send('Please supply a reason to mute this user!')
                } else {
            member.roles.add(role);
            message.channel.send(member.user.tag + ` has been muted!
Reason: ` + reason)
member.send(`You have been muted in ${serverGuild.name} by ${message.author.tag}!
Reason: ` + reason)
                }
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!unmute')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({noPermsEmbed})
        } else {
            const serverGuild = message.guild
            const role = serverGuild.roles.cache.find(role => role.name === 'Muted');
            const member = message.mentions.members.first();
            if(!role) {
                message.channel.send('Could not find the muted role to remove! Make sure it is called "Muted"!')
            } else if(!member) {
                message.channel.send('Please supply a member to unmute!')
            } else if (!member.roles.cache.some(role => role.name === 'Muted')) {
                message.channel.send('This user is already unmuted!')
            } else {
                const args = message.content.split(' ').slice(1)
                const reason = args.slice(1).join(' ')
                if(!reason) {
                    message.channel.send('Please supply a reason to unmute this user!')
                } else {
            member.roles.remove(role);
            message.channel.send(member.user.tag + ` has been unmuted!
Reason: ` + reason)
                member.send(`You have been unmuted in ${serverGuild.name} by ${message.author.tag}!
Reason: ` + reason)
                }
            }
        }
    }
})
client.on("messageDelete", (messageDelete) => {
    const serverA = 670028957772414996 
    if(messageDelete.guild.id != serverA) {
        return
    } else {
            if(messageDelete.content.startsWith('y!poll')) {
                return
            } else {
                if(messageDelete.content.startsWith('y!feedback')) {
                    return
                } else {
    const channel = client.channels.cache.get('737090606672642050');  
    if(messageDelete.author.bot) return;
    const deleteEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
     .setThumbnail(messageDelete.author.displayAvatarURL())
     .setTitle('A Message was Deleted!')
     .setDescription(`Content: ${messageDelete.content}
Sent By: ${messageDelete.author}`)
     .setFooter('API developed by misterdepth')
    channel.send({embed:deleteEmbed})
                }
            }
    }
})

client.login(process.env.token)