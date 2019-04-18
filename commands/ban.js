exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id != '370432461475151873') return message.channel.send('❌ Недостаточно прав на использование команды!')

    let member = message.guild.member(message.mentions.users.first() || message.guild.member.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member) return message.channel.send(' ❕ Укажите существующего пользователя')
    else if (member.hasPermission("BAN_MEMBERS")) return message.channel.send('❌ Я не могу исключить этого пользователя')

    let reason = args.slice(1).join(' ') || 'Не указана'

    message.del(5000)

    await member.ban(reason)
    await message.channel.send(`<${message.author.id}> заблокировал <${member.id}>\n**Причина:** ${reason}`)
    await member.send(`❕Вы были забанены пользователем <@${message.author.id}>\n**Причина:** ${reason}`)
}

exports.help = {
    name: "ban",
    description: "Забанить пользователя",
    rule: "Лидер и выше",
    usage: ".ban [Пользователь: упоминание/ник] [причина]"
}