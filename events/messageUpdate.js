const Discord = require('discord.js')

module.exports = async (oldMessage, m) => {
    const EDembed = new Discord.RichEmbed()
	.setAuthor(`Сообщение изменено`, `${m.guild.iconURL}`)
	.addField(`Отправитель`, `${m.member}`, true)
	.addField(`Канал`, `${m.channel}`, true)
	.addField(`Изменил`, `${oldMessage.content}`)
	.addField(`На`, `${m.content}`)
	.setFooter(`ID: ${m.id}`)
	.setColor(0x40E0D0)
	.setTimestamp()

	await m.guild.channels.get('475564494203125761').send(EDembed)
}