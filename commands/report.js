const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if (!rUser) return mess = message.channel.send("❌ Неверно указан пользователь!")
    
    let reason = args.join(' ').slice(22)
    if (!reason) return mess = message.channel.send('❕ Укажите, чем вам этот человек не нравится')
    
    let reportEmbed = new Discord.RichEmbed()
    .setFooter(`Получена жалоба от ${message.author.username} (${message.author.id})`, message.guild.iconURL)
    .setDescription('Жалобы')
    .setColor(0x40E0D0)
    .addField('Жалоба на', rUser)
    .addField('ID человека', rUser.id)
    .addField('Причина', reason)
    .setTimestamp('В', message.createdAt)

    let Rchannel = message.guild.channels.find(`name`, "жалобы") || message.guild.channels.find(`name`, "reports")
    if (!Rchannel) return console.log('Нет подходящего канала')

    await Rchannel.send(reportEmbed)
    await rUser.send(`❕ На Вас была отправлена жалоба пользователем ${message.author}\n**Причина:** ${reason}`)


}

exports.help = {
    name: "report",
    description: "Жалоба на пользователя",
    usage: ".report [Пользователь: упоминание/ник] [причина]"
}