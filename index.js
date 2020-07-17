const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = 'y!'
const misterDisc = 689661065872670767
const JaruCom = 728775383943610438
const safety8 = 730976964789403710
const noPermsEmbed = new Discord.MessageEmbed()
 .setColor('0dff00')
 .setTitle('Inssuficient Perms')
 .setDescription('Sorry, but you do not have the required permissions!')
 .setFooter('API developed by misterdepth')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
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
         .addField('**y!hint**', 'Get a hint at the event!', true)
         .addField('**y!poll**', 'Create a poll! Currently mods only.', true)
         .addField('**y!betterbotlogs**', 'See information about BetterBotLogs!', true)
         .addField('**y!staff**', 'See the staff on your server!')
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
         .addField('Changelog:', `0.5.3
    - Changed the name for the final time to WhyBot
    - Made some if commands to swith commands!`)
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
        .addField('Is WhyBot public?', 'At the moment, it is closed to only a few servers, however it may be released one day!')
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
                const reason = args.slice(2).join(' ') 
                if(!reason) {
                    message.reply('A reason must be set!')
                } else {
                    unfortunateGuy1.kick(message.author.tag + ' kicked for the reason: ' + reason).catch(err => {
                        message.channel.send('Oops! Something went wrong! Please try again!')
                        console.error()
                    })
                    message.channel.send(unfortunateGuy1.user.tag + ' has been successfully kicked!')

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
                const reason = args.slice(2).join(' ') 
                if(!reason) {
                    message.reply('A reason must be set!')
                } else {
                    unfortunateGuy2.ban(message.author.tag + ' banned for the reason: ' + reason)
                    message.channel.send(unfortunateGuy2.user.tag + ' has been successfully banned! Unban them in the server settings.')
                    .catch(err => {
                        message.channel.send('Oops! Something went wrong! Please try again!')
                        console.error()
                    })
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
        let randomQuote = Math.floor(Math.random()*5+1)
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
            }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!meme') {
        message.channel.send('This command is currently down. If you would like to submit a meme, DM misterdepth (must be SFW)!')
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!event')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            const args = message.content.split(' ').slice(1)
            if(!args[0]) {
                message.reply('Please supply an event.')
            } else {
            if(args[0] == 'discduel2') {
                const duel2Embed = new Discord.MessageEmbed()
                .setColor('0dff00')
                .setTitle('Misterdiscord Event Duel v2!')
                .setDescription('The previous misterdiscord duel even twas recent, and it was a most success! Another will be hosted, with more time to join.')
                .addField('**What is it?**', `This event is where misterdepth is going to duel everyone who is going to participate in the event.`)
                .addField('**When?**', `misterdepth will ping the event role whenever it is going to happen.
There will be a time when the dueling will start, and from there on you can request to duel. If you do not request to duel, you will not be in the event.`)
                .addField('**How do I participate?**', 'misterdepth will ping you whenever it is your turn, and all you have to do is accept the party invite in Hypixel!')
                .addField('**How do I get the Event Role?**', 'Put your IGN in #suggestions, and you will gain the Event Role from there.')
                .addField('\u200b', '\u200b', true)
                .addField('\u200b', '\u200b', true)
                .addField('Get ready!', 'Good luck to everyone!')
                .setFooter('API developed by misterdepth')
            
            message.delete()
            message.channel.send({embed:duel2Embed})
            }
            if(args[0] == 'list') {
                const eventList = new Discord.MessageEmbed()
                .setColor('0dff00')
                .setTitle('List of WhyBot Events:')
                .setDescription('Here are all of the current listed events!')
                .addField('Misterdiscord Duel v2:', 'an event for misterdepth\'s discord.')
                .addField('IdleMinerChampionships', 'Try to get the highest rebirths in a certain amount of time!')
                .addField('Coming Soon', 'More coming soon!')
                .setFooter('API developed by misterdepth')
            message.delete()
            message.channel.send({embed:eventList})
            }
            if(args[0] == 'idleminerchamp') {
                const idleEvent = new Discord.MessageEmbed()
                 .setColor('0dff00')
                 .setTitle('The Idle Miner Championships!')
                 .setDescription('In Misterdiscord, whoever can get the highest idle miner stats by the end of June gets a reward!')
                 .addField('How do I become better?', 'Get more rebirths, get a higher level backpack, pickaxe, or get an insane amount of money all in #idle-miner.')
                 .addField('How can I check my rankings?', 'Everyday, the assumed top 3 (or so) people will be posted in #event-channel, so stay tuned!')
                 .addField('How do I participate?', 'Check Idle-Miner Pins for more information.')
                 .addField('How long do I have?', 'Until the end of June, or about 13 days.')
                 .addField('\u200b', '\u200b', true)
                 .addField('\u200b', '\u200b', true)
                 .addField('Get ready!', 'Good luck to everyone!')
                 .setFooter('API developed by misterdepth')
                message.delete()
                message.channel.send({embed:idleEvent})
            }
            }
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
            .addField('**y!kick**', 'Kick a user. (reason must be set, longer than 1 word.)', true)
            .addField('**y!ban**', 'Ban a user. (reason must be set, longer than 1 word.)', true)
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
    if(message.content.startsWith('y!rules')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({noPermsEmbed})
        } else {
            const args = message.content.split(' ').slice(1)
            if(!args[0]) {
                message.channel.send('Please supply a server!')
            } else {
                if(args[0] == 'misterdisc') {
                    const misterdiscordEmbed = new Discord.MessageEmbed()
                     .setColor('0dff00')
                     .setTitle('Misterdiscord Rules and Info:')
                     .setDescription('Misterdiscord is the discord of misterdepth, a YouTuber. Make sure to follow the rules: ')
                     .addField('#1: No Hate Speech', 'Roasting is fine, but nothing that gets personal or can hurt anyone\'s feelings.')
                     .addField('#2: No Profanity', 'Please do not use any strong language, or use any inappropriate talk.')
                     .addField('#3: Enjoy your time!', 'Have fun, and make sure that you\'re following the rules!')
                     .addField('#4: No Spamming', 'Do not spam messages in any channel, or ping anyone excessively (including bots).')
                     .addField('#5: No Advertising', 'Do not advertise unless permission from staff is given.')
                     .addField('\u200b', '\u200b', true)
                     .addField('\u200b', '\u200b', true)
                     .addField('Enjoy your stay!', 'Other than these rules, freedom is yours. Have fun!')
                     .setFooter('API developed by misterdepth')
                    message.delete()
                    message.channel.send({embed:misterdiscordEmbed})

                }
                if(args[0] == 'sbepic') {
                    const sbgamerEmbed = new Discord.MessageEmbed()
                    .setColor('0dff00')
                    .setTitle('SkyBlock Rules and Info:')
                    .setDescription('Welcome to SkyBlock, an epic gamer server for epic gamer stuff. If you want to stay, read the rules nerd:')
                    .addField('#1: No Fighting', 'Don\'t fight or cause lots of drama. That\'s badness.')
                    .addField('\u200b', '\u200b', true)
                    .addField('#2: No Scamming', 'COOPADD ME FOR MONEY REEE <--- Don\'t do that.')
                    .addField('\u200b', '\u200b', true)
                    .addField('#3: Work as a Team', 'It isn\'t a competition, help out!')
                    .addField('\u200b', '\u200b', true)
                    .addField('#4: Stay ahead', 'Not a competition but try not to get left behind.')
                    .addField('\u200b', '\u200b', true)
                    .addField('#5: No toxicity', 'Don\'t be rude and/or toxic to others.')
                    .addField('\u200b', '\u200b', true)
                    .addField('#6: Be Peacful', 'Do not cause trouble!')
                    .addField('\u200b', '\u200b', true)
                    .addField('#7: No Cursing', 'It\'s bad')
                    .addField('\u200b', '\u200b', true)
                    .addField('Enjoy your stay!', 'Other than these rules, freedom is yours ~~not really~~. Have fun!')
                message.delete()
                message.channel.send({embed:sbgamerEmbed})
                }
            }
        }
    }
})
client.on('message', function(message) {
    if(message.content == 'y!question') {
        let randomQuiz = Math.floor(Math.random()*10+1)
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
         .setDescription('Warning: Potentional errors could occur due to the fact that this bot is designed for only a few serevers.')
         .addField('Invite Link:', 'Currently this bot is in closed development. Come back later!')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:inviteEmbed})
    }
})
client.on("messageDelete", (messageDelete) => {
    if(messageDelete.guild.id != misterDisc) {
        return
    } else {
        if(messageDelete.content.includes('rawfishsticks')) {
            return
        } else {
            if(messageDelete.content.startsWith('y!poll')) {
                return
            } else {
                if(messageDelete.content.startsWith('y!feedback')) {
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
        if(messageDelete.content.includes('rawfishsticks')) {
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
    if(message.content == 'y!feedgabriel') {
        message.channel.send('uh come back when i find an emoji to use')
    }
})
client.on('message', function(message) {
    if(message.content == 'y!hint') {
        message.channel.send(`Hint for the Event:
Fish sticks, but I don't want to eat them.

This is:
all lowercase
one word

Good luck!`)
    }
})
client.on('message', function(message) {
    if(message.content.includes('rawfishsticks')) {
        let guy = message.author
        guy.send(`Hey!
You found the secret code! If you are finding this message, please screenshot this and dm this to misterdepth for a reward!
Pin: 83866 (do not remove this from screenshot)`)
message.delete()
console.log(guy.username + ' won!')
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
    if(message.content == 'y!stroke') {
        message.channel.send('sfdkjlssjklfsjdjklsdlksfjlfsdk')
        message.channel.send('sdkljlkjkjjjjjjjjjjjjjjj')
        message.channel.send('sdfjjjsdddddd')
        message.channel.send('give me a esnddddddddddddddddddddd')
        message.channel.send('let me clean things up here').then(message => {
            setTimeout(function() {message.channel.bulkDelete(5)}, 2000)
        })
    }
})
client.on('message', function(message) {
    if(message.content == 'y!betterbotlogs') {
        const BotLogEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('BetterBotLogs Information:')
         .setDescription('BetterBotLogs is a way of logging actions in the server, being precise and careful.')
         .addField('Features: ', `- Seeing Deleted Messages
- Seeing Edited Messages

More to come! This bot is still in development!`)
         .addField('How Can I Get BetterBotLogs?', 'BetterBotLogs takes some private development, so if you\'d like to have it in your server, please DM misterdepth!')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:BotLogEmbed})
    }
})
client.on('message', function(message) {
    if(message.content.startsWith('y!staff')) {
        if(message.guild.id == misterDisc) {
            const misterDiscStaff = new Discord.MessageEmbed()
             .setColor('0dff00')
             .setTitle('Server Staff: Misterdiscord')
             .setDescription('Staff for misterdiscord!')
             .addField('misterdepth', 'Role: Owner')
             .addField('GabrielZ1', 'Role: Admin', true)
             .addField('Chicken', 'Role: Admin', true)
             .addField('Grandiloquentcy', 'Role: Moderator')
             .addField('ExtraLead', 'Role: Jr. Moderator')
             .setFooter('API developed by misterdepth')
            message.channel.send({embed:misterDiscStaff})
        } else {
            message.channel.send('This server does not have any listed staff! If you want to add it, DM misterdepth.')
        }
    }
})

client.login(process.env.token)