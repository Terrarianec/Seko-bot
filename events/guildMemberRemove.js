const Discord = require('discord.js')
const config = require('../config.json')

module.exports = async (bot, member) => {
    let channel = member.guild.channels.find(c => c.name == 'welcome')
    if(!channel) return console.log('Не найден канал для приветствий...')

    let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.username} покинул сервер "${member.guild.name}"`, member.guild.iconURL)
    .addField('Осталось участников:', `${member.guild.presences.size} в сети\n${member.guild.memberCount} всего`, true)
    .setTimestamp(new Date(member.guild.createdTimestamp))
    .setColor(config.color)
    .setThumbnail(member.user.displayAvatarURL)
    .setFooter(`by ${bot.user.username}`, bot.user.displayAvatarURL)
    await channel.send(embed)
}