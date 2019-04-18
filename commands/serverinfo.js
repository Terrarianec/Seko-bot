const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let Sembed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Владелец', message.guild.owner, true)
    .addField('ID', message.guild.id, true)
    .addField('Регион', message.guild.region, true)
    .addField('Участники', `${message.guild.presences.size} в сети\n${message.guild.memberCount} всего`, true)
    .addField('Каналы', `**Всего ${message.guild.channels.filter(c => c.type == 'text').size + message.guild.channels.filter(c => c.type == 'voice').size} из них**:\n*${message.guild.channels.filter(c => c.type == 'text').size} текстовых*\n*${message.guild.channels.filter(c => c.type == 'voice').size} голосовых`)
    .addField('Ролей', message.guild.roles.size, true)
    .setFooter('Сервер создан')
    .setTimestamp(new Date(message.guild.createdTimestamp))
    .setColor(0x40E0D0)
    await message.channel.send(Sembed)
}

exports.help = {
    name: "serverinfo",
    description: "Информация о сервере",
    usage: ".serverinfo"
}