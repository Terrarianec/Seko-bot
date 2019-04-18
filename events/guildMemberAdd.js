const Discord = require('discord.js')
const config = require('../config.json')

module.exports = async (bot, member) => {
    let channel = member.guild.channels.find(c => c.name == 'welcome')
    if(!channel) return console.log('Не найден канал для приветствий...')

    let ch = member.guild.channels.find(c => c.name == '📌основной')

    let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.username} присоединился к серверу "${member.guild.name}"`, member.guild.iconURL)
    .setDescription(`*${member.user.username}, добро пожаловать на наш сервер! Надеемся, тебе здесь понравится 😊*\n**Если есть вопросы, обращайся к ${member.guild.owner.user.username}**\nДля общения заходи в <#${ch.id}> 😘`)
    .addField('Владелец', member.guild.owner, true)
    .addField('Регион', member.guild.region, true)
    .addField('Участников:', `${member.guild.presences.size} в сети\n${member.guild.memberCount} всего`, true)
    .addField('Каналов:', `**Всего ${member.guild.channels.filter(c => c.type == 'text').size + member.guild.channels.filter(c => c.type == 'voice').size} из них**:\n*${member.guild.channels.filter(c => c.type == 'text').size} текстовых\n${member.guild.channels.filter(c => c.type == 'voice').size} голосовых*`)
    .setTimestamp(new Date(member.guild.createdTimestamp))
    .setColor(config.color)
    .setThumbnail(member.user.displayAvatarURL)
    .setFooter(`by ${bot.user.username}`, bot.user.displayAvatarURL)
    await channel.send(embed)
}