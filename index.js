const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require('node-fetch')
const axios = require('axios')
const talkedRecently = new Set()
//const process = require('./process.json')
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

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)
    async function setStatus() {
        const obj = await fetch('https://misterdepth.github.io/api/whybot.json').then(x => x.json())
        let newStatus = obj.displayStatus
        client.user.setActivity(newStatus, { type: "PLAYING" })
    }
    setInterval(setStatus, 20000)
})
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
client.on('message', async function(message) {
    if(message.author.bot || !message.content.startsWith(prefix)) return
    if(message.channel.type == "dm") return message.reply('You can\'t use WhyBot in dms!')
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === "help") {
        const youelpEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Commands and Help Menu')
         .setDescription('WhyBot is a bot used for moderation and other events.')
         .addField('**y!feedback**', 'Give us feedback!', true)
         .addField('**y!modhelp**', 'For administrators.', true)
         .addField('**y!info**', 'Check out some information on the bot.', true)
         .addField('**y!question**', 'Be asked a question by the bot.', true)
         .addField('**y!invite**', 'Get the invite link for WhyBot.', true)
         .addField('**y!roses**', 'Get a roses are red poem.', true)
         .addField('**y!userinfo**', 'Get a user\'s information.', true)
         .addField('**y!betterbotlogs**', 'See information about BetterBotLogs!', true)
         .addField('**y!guess**', 'Try to guess the bot\'s number!', true)
         .addField('**y!fight**', 'Fight another user!', true)
         .addField('**y!content**', 'The help menu for content!', true)
         .addField('**y!animals**', 'Animal command help menu!', true)
         .addField('**y!mcinfo**', 'See the minecraft information for a user!', true)
         .addField('', '')
         .addField('Check out WhyBot\'s Website!', '[Click here](https://misterdepth.github.io/whybot)')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:youelpEmbed})
    }

    if(command === "purge") {
        const guild = message.guild
        if(!message.channel.permissionsFor(guild.me).has('MANAGE_MESSAGES')) {
            message.channel.send('Woops! I can\'t use this command here! Please give the manage messages permission for this channel!')
        } else {
        if(!message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            try {
            const amount = args.join(' ')
            if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!')
            if (isNaN(amount)) return message.reply('The amount parameter isn\'t a number!')
            if (amount > 100) return message.reply('You can\'t delete more than 100 messages at once!')
            if (amount < 1) return message.reply('You have to delete at least 1 message!')
            await message.channel.messages.fetch({ limit: amount }).then(async messages => { // Fetches the messages
                await message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
            )});
            } catch (err) {
                message.reply('Something went wrong! Please try again!')
            }
        }
    }
    }

    if(command === "changelog") {
        const changelogEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Changelog')
         .setDescription('Check out all of the new features in WhyBot updates.')
         .addField('Changelog:', `1.3.1: Poll Fixed + More\n` +
         `- Starting Revamping some Commands\n` + 
         '- Starting Fixing some Lists\n' +
         '- FIXED THE POLL COMMAND')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:changelogEmbed})
    }
    if(command === "info") {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('0dff00')
        .setTitle('WhyBot Information')
        .setDescription('Here is the information about this bot!')
        .addField('What is WhyBot?', 'WhyBot is a general purpose bot for content creators, animal lovers, and more!')
        .addField('Is WhyBot public?', 'Yes! It is! Do y!invite to get the link!')
        .addField('What are all of the commands?', 'Use y!help to check out all of the commands!')
        .addField('What is the current prefix?', 'It is \'y!\'')
        .addField('What was added?', 'Use y!changelog to find that out!')
        .addField('How many servers does this bot have?', `WhyBot is in ${client.guilds.cache.size} servers, and is watching over ${client.users.cache.size} users!`)
        .setFooter('API developed by misterdepth')
        message.channel.send({embed:infoEmbed})
    }
    if(command === "feedback") {
        let args = message.content.split('y!feedback ').slice(1)
        if(!args[0]) {
            message.reply('Please supply some feedback!')
        } else {
        console.log(message.author.username + ' suggested ' + args[0])
        message.delete()
        message.channel.send('Thank you for your feedback!')
        }
    }
    if(command === "shutdown") {
        if(message.member.id != "315173627232518147") {
            message.channel.send({embed:noPermsEmbed})
        } else {
            client.destroy()
        }
    }
    if(command === "modhelp") {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed}) 
        } else {
            const modEmbedHelp = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('WhyBot Moderation Help')
            .setDescription('For administrators and stuff.')
            .addField('Admin Only Commands: ', 'Commands that can only be used by members with the administrator permissions.')
            .addField('**y!channel**', 'Edit channel permissions!', true)
            .addField('**y!mail**', 'Send a user some mail.', true)
            .addField('Moderators Only: ', 'Commands only for people with the "manage messages" perms.')
            .addField('**y!poll**', 'Create a poll! Use the syntax!', true)
            .addField('**y!purge**', 'Purge a certain number of messages!', true)
            .setFooter('API developed by misterdepth')
        message.channel.send({embed:modEmbedHelp})
        }
    }
    if(command === "quiz") {
        let questions = [
            '**Question:** Apples or Oranges?',
            '**Question:** CoronaBot or WhyBot?',
            '**Question:** YouTube or Twitch?',
            '**Question:** Inside or Outside?',
            '**Question:** AC or Mechanical Fans?',
            '**Question:** Singing or Dancing?',
            '**Question:** Tacos or Hamburgers?',
            '**Question:** Teleportation or Flying?',
            '**Question:** Strawberries or Bananas?',
            '**Question:** Salted Crackers or Unsalted Crackers?',
            '**Question:** Anime or Regular Cartoons?',
            '**Question:** Grapes or Raisins?',
            '**Question:** Night or Day?',
            '**Question:** Java or Python?',
            '**Question:** Harry Potter or Percy Jackson?'
        ]
        let question = Math.floor(Math.random()*questions.length)
        message.channel.send(questions[question]).then(msg => {
            msg.react("🇦")
            msg.react("🇧")
        })
    }
    if(command === "invite") {
        const inviteEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Invite Link')
         .setDescription('Here is the Invite Link for WhyBot!')
         .addField('Bot Invite:', '[Click here](https://discord.com/oauth2/authorize?client_id=722141994184474744&scope=bot&permissions=8)')
         .addField('Support Server Invite:', '[WhyBot Support Server](https://discord.com/invite/9JhEsHe)')
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:inviteEmbed})
    }
    if(command === "roses") {
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
    if(command === "userinfo") {
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
    if(command === "betterbotlogs") {
        if(!args[0]) {
            const BotLogEmbed = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('BetterBotLogs Information:')
            .setImage('https://cdn.discordapp.com/attachments/715386760317894757/742803112875786330/unknown.png')
            .setDescription('BetterBotLogs is a way of logging actions in the server, being precise and careful.')
            .addField('Features: ', `- Seeing Deleted Messages\n- Seeing Edited Messages\n\nMore to come! This bot is still in development!`)
            .addField('How Can I Get BetterBotLogs?', 'Create a channel called `message-logs` and the logging will appear there!')
            .setFooter('API developed by misterdepth')
           message.channel.send({embed:BotLogEmbed})
        }
           if(args[0] == 'check') {
               const serverGuild = message.guild
               const channelThing = serverGuild.channels.cache.find(x => x.name === "message-logs")
               if(!channelThing) {
                   message.reply('A message logging channel was not found! Make sure it is called "message-logs"!')
               } else {
                   message.reply(`A message logging channel was found! (${channelThing})`)
               }
           
        }
    }
    if(command === "channel") {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
            const guild = message.guild
            if(!message.channel.permissionsFor(guild.me).has('MANAGE_CHANNELS')) {
                message.reply('I don\'t have permissions! Make sure I have permission to edit this channel!')
            } else {
            switch(args[0].toLowerCase()) {
                case "visible":
                    if(message.channel.permissionsFor(message.guild.roles.everyone).has('VIEW_CHANNEL')) {
                        message.reply('This channel is already visible!')
                        return
                    }
                    const channelVis = client.channels.cache.get(message.channel.id);  
                    channelVis.updateOverwrite(channelVis.guild.roles.everyone, { VIEW_CHANNEL: true })
                    message.channel.send('Channel is now visible!')
                    break 
                case "invisible":
                    if(!message.channel.permissionsFor(message.guild.roles.everyone).has('VIEW_CHANNEL')) {
                        message.reply('This channel is already invisible!')
                        return
                    }
                    const channelInvis = client.channels.cache.get(message.channel.id);  
                    channelInvis.updateOverwrite(channelInvis.guild.roles.everyone, { VIEW_CHANNEL: false })
                    message.channel.send('Channel is now invisible! Ninja mode!')
                    break 
                case "close":
                    if(!message.channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
                        message.reply('This channel is already closed!')
                        return
                    }
                    const channelNosend = client.channels.cache.get(message.channel.id);  
                    channelNosend.updateOverwrite(channelNosend.guild.roles.everyone, { SEND_MESSAGES: false })
                    message.channel.send('Channel is now closed!')
                    break
                case "open":
                    if(message.channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
                        message.reply('This channel is already open!')
                        return
                    }
                    const channelSend = client.channels.cache.get(message.channel.id);  
                    channelSend.updateOverwrite(channelSend.guild.roles.everyone, { SEND_MESSAGES: true })
                    message.channel.send('Channel is now open!')
                    break 
                case "images":
                    if(message.channel.permissionsFor(message.guild.roles.everyone).has('ATTACH_FILES')) {
                        message.reply('This channel already allows images!')
                        return
                    }
                    const channelImages = client.channels.cache.get(message.channel.id)
                    channelImages.updateOverwrite(channelImages.guild.roles.everyone, { ATTACH_FILES : true })
                    message.channel.send('You can now send images in this channel!')
                    break 
                case "text":
                    if(!message.channel.permissionsFor(message.guild.roles.everyone).has('ATTACH_FILES')) {
                        message.reply('This channel already disallows images!')
                        return
                    }
                    const channelNoImages = client.channels.cache.get(message.channel.id)
                    channelNoImages.updateOverwrite(channelNoImages.guild.roles.everyone, { ATTACH_FILES : false })
                    message.channel.send('You can no longer send images in this channel!')
                    break 
                default:
                    message.channel.send(`Please supply a valid option! Options:\n` +
                    '- Visible (allows members to see)\n' +
                    '- Invisible (disallows members to see)\n' +
                    '- Open (allows members to send messages)\n' +
                    '- Close (disallows members to send messages)\n' +
                    '- Images (allows members to send images)\n' +
                    '- Text (disallows members to send images)')
            }
        }
        }
    }
    if(command === "guess") {
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
    if(command === "ping") {
        const botping = new Date() - message.createdAt;
        const pingEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle('WhyBot Latency')
         .setDescription('Here is the WhyBot Ping!')
         .addField(':bell: Ping:', `${botping}ms`)
         .setFooter('API developed by misterdepth')
        message.channel.send({embed:pingEmbed})
    }
    if(command === "fight") {
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
    if(command === "log") {
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
    if(command === "content") {
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

    if(command === "twitch") {
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
                } else if(!channel.permissionsFor(serverGuild.me).has('MENTION_EVERYONE')) {
                    message.reply('Oops! I can\'t ping this role in that channel! Please give me permissions!')
                } else {
                    channel.send(`Hey! **${args[0]}** is now live on https://twitch.tv/${args[0]} ! Go watch! ${role}`)
                }
            }
        }
    }
    if(command === "youtube") {
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
                } else if(!channel.permissionsFor(serverGuild.me).has('MENTION_EVERYONE')) {
                    message.reply('Oops! I can\'t ping this role in that channel! Please give me permissions!')
                } else {
                    channel.send(`Hey! **${args[0]}** just uploaded a new video ${args[2]} ! Go watch! ${role}`)
                }
            }
        }
    }
    if(command === "animals") {
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
    if(command === "cat") {
        const obj = await fetch("https://api.thecatapi.com/v1/images/search").then(x => x.json())
        const catURL = obj[0]
        const catEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle(':heart_eyes_cat: Meow!')
         .setImage(catURL.url)
         .setFooter('Images provided by thecatapi.com')
        message.channel.send({embed:catEmbed})
    }
    if(command === "dog") {
        const obj = await fetch("https://api.thedogapi.com/v1/images/search").then(x => x.json())
        const dogURL = obj[0]
        const dogEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle(':dog: Woof!')
         .setImage(dogURL.url)
         .setFooter('Images provided by thedogapi.com')
        message.channel.send({embed:dogEmbed})
    }
    if(command === "fox") {
        const obj = await fetch("https://randomfox.ca/floof/").then(x => x.json())
        const foxEmbed = new Discord.MessageEmbed()
         .setColor('0dff00')
         .setTitle(':fox: Fox!')
         .setImage(obj.image)
         .setFooter('Images provided by randomfox.ca')
        message.channel.send({embed:foxEmbed})
    }
    if(command === "mcinfo") {
        if(!args[0]) {
            message.reply('You must provide a name!')
        } else if(!isNaN(args[0])) {
            message.reply('This is an invalid name!')
        } else {
            try {
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
                 .setThumbnail(`https://crafatar.com/avatars/${uuid}?overlay`) 
                 .setDescription(`**Past Usernames:**\n ` + nameArray)
                 .addField('**Skin:**', `[Download Skin](https://crafatar.com/skins/${uuid})`)
                 .addField('**UUID**:', `${uuid}`)
                 .setFooter('Names Provided by Mojang API, Avatar Provided by Crafatar API')
                message.channel.send({embed:thingEmbed})
            }
            } catch (err) {
                message.reply('This is an invalid name!')
            }

        }
    }
    if(command === "mail") {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
        const args = message.content.split(' ').slice(1)
        const mail = args.slice(1).join(' ')
        const mailMan = message.mentions.users.first()
        if(!mailMan) {
            message.reply('Please reply with someone to mail!')
        } else if(!mail) {
            message.reply('Please reply with something to mail!')
        } else {
            if(talkedRecently.has(message.author.id)) {
                message.reply(':ice_cube: Chill out man! You\'re on cooldown for 20 seconds!');
        } else {
            try {
                const serverGuild = message.guild
                const mailEmbed = new Discord.MessageEmbed()
                 .setColor('0dff00')
                 .setThumbnail(serverGuild.iconURL())
                 .setTitle(`New Mail From ${serverGuild.name}`)
                 .setDescription(`You have new mail from user ${message.author.tag} in ${serverGuild.name}!`)
                 .addField('**Mail:**', mail)
                 .setFooter('API developed by misterdepth')
                await mailMan.send({embed:mailEmbed})
                message.reply(':mailbox_with_mail: Mail sent!')
            } catch (err) {
                message.reply(':mailbox_closed: This user has their mailbox closed!')
            }
            talkedRecently.add(message.author.id);
            setTimeout(() => {
              talkedRecently.delete(message.author.id);
            }, 20000);
        }
        }
        }
    }
    if(command === "eval") {
        if(message.author.id !== "315173627232518147") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      await message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    }
})

client.on('message', async function(message) {
    if(message.guild.id != "732374933283274862") return;

    if(message.channel.id == "750851953793302581") {

        if(message.author.bot) return;

        try {

            const userinfoIGN = await fetch(`https://api.mojang.com/users/profiles/minecraft/${message.content}`).then(x => x.json())

            const uuid = userinfoIGN.id 
            if(!uuid) return message.reply("Invalid IGN/API is down").then((sentMsg) => {
                
                setTimeout(async () => {
                    try {
                    await message.delete()
                    await sentMsg.delete()
                    } catch (err) { return }
                
                }, 6000)
            })

            const hypixelData = await fetch(`https://api.hypixel.net/player?key=41a82fa1-b52f-41d5-8eb3-87d03e2a3ec7&name=${message.content}`).then(x => x.json())
            const player = hypixelData.player
            const discord = player.socialMedia.links.DISCORD 
            if(!player || !player.socialMedia || !player.socialMedia.links || !discord) return message.reply("You have not linked your discord!").then((sentMsg) => {
                
                setTimeout(async () => {
                    try {
                    await message.delete()
                    await sentMsg.delete()
                    } catch (err) { return }
                
                }, 6000)
            })

            const userDiscord = message.author.tag 
            if(userDiscord != discord) return message.reply("The linked discord is not yours!").then((sentMsg) => {
                
                setTimeout(async () => {
                    try {
                    await message.delete()
                    await sentMsg.delete()
                    } catch (err) { return }
                
                }, 6000)
            })

            if(message.member.roles.cache.get("750857969649975349")) return message.reply("You are already verified!").then((sentMsg) => {
                
                setTimeout(async () => {
                    try {
                    await message.delete()
                    await sentMsg.delete()
                    } catch (err) { return }
                
                }, 6000)
            })
            try {
                await message.member.roles.add('750857969649975349')
                await message.member.setNickname(message.content)

                let verifyLogs = client.channels.cache.get('750865962814931045')
                if(!verifyLogs) return

                const verifiedEmbed = new Discord.MessageEmbed()
                 .setColor('0dff00')
                 .setTitle("NEW USER VERIFIED")
                 .setDescription(`New User Verified:\nDiscord User: ${message.author}\nMinecraft Username: ${message.content}`)
                 .setTimestamp()
                verifyLogs.send({embed:verifiedEmbed})

                 message.channel.send(`You are now verified as ${message.content}!`).then((sentMsg) => {
                     
                    setTimeout(async () => {
                        try {
                        await message.delete()
                        await sentMsg.delete()
                        } catch (err) { return }
                     
                    }, 6000)
                 })

            } catch (err) {

                message.reply("Looks like I cannot verify you for some reason!").then((sentMsg) => {
                    
                    setTimeout(async () => {
                        try {
                        await message.delete()
                        await sentMsg.delete()
                        } catch (err) { return }
                        
                    }, 6000)
                })
            }


        } catch (err) {

            message.reply("Something went wrong while trying to verify you!").then((sentMsg) => {
                
                setTimeout(async () => {
                    try {
                    await message.delete()
                    await sentMsg.delete()
                    } catch (err) { return }
                
                }, 6000)
            })
        }
    }
})

client.on('messageDelete', async function(messageDelete) {
    if(messageDelete.channel.type == "dm") return;
        if(messageDelete.content.startsWith('y!poll')) return;
        if(messageDelete.content.startsWith('y!feedback')) return;
        try {
        const serverGuild = messageDelete.guild
                const channel = serverGuild.channels.cache.find(x => x.name === "message-logs");
                if(!channel) return  
                if(messageDelete.author.bot) return;
                const deleteEmbed = new Discord.MessageEmbed()
                 .setColor('0dff00')
                 .setAuthor(`${messageDelete.author.tag}`, messageDelete.author.displayAvatarURL())
                 .setThumbnail(messageDelete.author.displayAvatarURL())
                 .setTitle('A Message was Deleted!')
                 .setDescription(`A Message was Deleted By ${messageDelete.author} in ${messageDelete.channel}!`)
                 .addField('**Content:**', `${messageDelete.content}`)
                await channel.send({embed:deleteEmbed})
        } catch (err) {
            return
        }
})

client.on("messageUpdate", async function(oldMessage, newMessage){
    if(newMessage.channel.type == "dm") return;
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    try {
    const serverGuild = newMessage.guild
    const channel = serverGuild.channels.cache.find(x => x.name === "message-logs");  
    if(!channel) return
    const editEmbed = new Discord.MessageEmbed()
     .setColor('0dff00')
     .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
     .setThumbnail(newMessage.author.displayAvatarURL())
     .setTitle('A Message was Updated!')
     .setDescription(`A Message was Edited by ${newMessage.author} in ${newMessage.channel}!`)
     .addField('**Old Content:**', `${oldMessage.content}`)
     .addField('**New Content:**', `${newMessage.content}`)
    await channel.send({embed:editEmbed})
    } catch (err) {
        return
    }
   });

client.login(process.env.token)

client.on('message', function(message) {
    if(message.content.startsWith('y!poll')) {
        if(message.channel.type == "dm") {
            message.channel.send('You cannot use this feature in Direct Messages!')
            return
        }
        if(message.author.bot) return;
        if(!message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES')) {
            message.channel.send({embed:noPermsEmbed})
        } else {
        const args = message.content.split('/').slice(1)
        if(!args[0] || !args[1] || !args[2]) {
            message.channel.send(`Please use the format:\ny!poll/question/answer1/answer2/OPTIONALanswer3/OPTIONALanswer4`)
        } else {
            if(!args[3]) {
            const pollEmbed = new Discord.MessageEmbed()
             .setColor('0dff00')
             .setTitle('Poll Time!')
             .setDescription('Poll by ' + message.author.tag + '!')
             .addField(`${args[0]}`, `1. ${args[1]}\n2. ${args[2]}`)
            .addField('Vote Now!', 'Vote by reacting with the emojis!')
            .setFooter('API developed by misterdepth')
            message.delete()
            message.channel.send({embed:pollEmbed}).then(sentEmbed => {
                sentEmbed.react("1️⃣")
                sentEmbed.react("2️⃣")
        })
    } else if(!args[4]) {
            const pollEmbed = new Discord.MessageEmbed()
            .setColor('0dff00')
            .setTitle('Poll Time!')
            .setDescription('Poll by ' + message.author.tag + '!')
            .addField(`${args[0]}`, `1. ${args[1]}\n2. ${args[2]}\n3. ${args[3]}`)
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
            .addField(`${args[0]}`, `1. ${args[1]}\n2. ${args[2]}\n3. ${args[3]}\n4. ${args[4]}`)
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

}})