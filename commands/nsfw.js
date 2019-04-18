const Discord = require('discord.js')
const config = require('../config.json')

exports.run = async (bot, message, args) => {

    let nsfw = new Discord.RichEmbed()
    .setAuthor('Доступ к nsfw каналу', message.guild.iconURL)
    .addField('Вы согласны попасть в nsfw канал?', `**У вас есть 35 секунд, чтобы выбрать.**\n**❕Канал пока что пустует.**`)
    .setColor(config.color)
    .setFooter(`by ${bot.user.username}`, bot.user.displayAvatarURL)

    let mess = await message.channel.send(nsfw)

    await message.delete()
    
    await mess.react('✔')
    await mess.react('❌')
    
    const collector = mess.createReactionCollector((reaction, user) => reaction.emoji.name === '✔' || reaction.emoji.name === '❌' && user.id == message.author.id, {time: 35000}, {maxUsers: 2})
    
    collector.on('collect', async r => {
        switch(r.emoji.name) {
        case '❌': 
        await mess.edit(`Ладно, лучше в безопасности 🛡`)
        collector.stop()
        break
        case '✔':
        await mess.edit(`Ладно, как пожелаешь~`)
        break
        }
    })

    bot.on('messageReactionAdd', (reaction, user) => {
        if(reaction.emoji.name === '✔') {
        bot.channels.get('562528037539676180').overwritePermissions(user, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: null
        }).then(updated => console.log(updated.permissionOverwrites.get(message.author.id)))
    } else if (reaction.emoji.name === '❌') {
        bot.channels.get('562528037539676180').overwritePermissions(user, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: null
        }).then(updated => console.log(updated.permissionOverwrites.get(message.author.id)))
    }
    })

    bot.on('messageReactionRemove', (reaction, user) => {
        if(reaction.emoji.name === '✔') {
        bot.channels.get('562528037539676180').overwritePermissions(user, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: null
        }).then(updated => console.log(updated.permissionOverwrites.get(message.author.id)))
    } 
    })

    collector.on('end', async () => {
        await mess.edit(`Время истекло`)
        mess.delete(3000)
    })
}

exports.help = {
    name: "nsfw",
    description: "Доступ к каналу с +18",
    usage: ".nsfw"
}
