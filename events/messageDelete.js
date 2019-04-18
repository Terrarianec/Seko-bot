const Discord = require('discord.js')

module.exports = async (bot, message) => {
	if(message === undefined) return
    const Dembed = new Discord.RichEmbed()
	.setAuthor(`Сообщение удалено`, message.guild.iconURL)
	.addField(`Отправитель`, message.member, true)
	.addField(`Канал`, message.channel, true)
	.addField(`Содержимое`, message.content)
	.setColor(0x40E0D0)
	.setTimestamp()

	await bot.channels.get('475564494203125761').send(Dembed)
}