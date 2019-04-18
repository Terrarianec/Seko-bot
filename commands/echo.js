const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let botMsg = args.slice(0).join(' ')
    if (!args[0]) {return message.reply('❌ И что же мне повторять?')} else {await message.delete()}
    if(message.author.id === '370432461475151873') {
    message.channel.send(botMsg)
    } else {
        let  MBembed = new Discord.RichEmbed()
        .setDescription(botMsg)
        .setFooter(`от ${message.author.username}`, message.author.displayAvatarURL)
        message.channel.send(MBembed)

    let ECembed = new Discord.RichEmbed()
	.setAuthor(`Речь от лица бота`, message.guild.iconURL)
	.addField(`Отправитель`, message.member, true)
	.addField(`Канал`, message.channel, true)
    .addField(`Содержимое`, botMsg)
    .setThumbnail(message.author.displayAvatarURL)
	.setColor(0x40E0D0)
    .setTimestamp()
    
    await bot.channels.get('475564494203125761').send(ECembed)
    }
}

exports.help = {
    name: "echo",
    description: "Речь от лица бота",
    usage: ".echo [сообщение]"
}