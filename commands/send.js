const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    let Rid = message.guild.owner.id
    let ID = message.author.id
	
	if (ID === '370432461475151873') {
		Rid = ID
		};
	
    if (ID != Rid) return message.channel.send('❕Прав маловато..')

    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if (!User) return mess = message.channel.send("❌ Неверно указан пользователь!")
    
    let w = args.join(' ').slice(22)
    if (!w) return mess = message.channel.send('❕Чего-то не хватает...') 

    let Lembed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} отправил сообщение ${User.user.username}`)
        .addField('Содержимое:', w)
        .setTimestamp()
		.setThumbnail(message.author.displayAvatarURL)
        .addField('Отправитель:', `ID: ${message.author.id}\nUser: ${message.author}`)
		.addField('Получатель:', `ID: ${User.id}\nUser: ${User}`)
		.setFooter('Ня~ Кавай~')
        
    bot.channels.get("561449999859318792").send(Lembed)

    await message.delete(15)
    let mess = await User.send(w)

    mess.delete(691200000)
}

exports.help = {
    name: "send",
    description: `Команда, с помощью которой можно писать в ЛС\nНо только владельцу`,
    rule: "Agent/Owner",
    usage: ".send [пользователь] [очень важный текст]"
}