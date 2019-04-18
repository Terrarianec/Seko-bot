exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") && message.author.id != '370432461475151873') return message.channel.send('❌ Недостаточно прав на использование команды!')

    let member = message.guild.member(message.mentions.users.first() || message.guild.member.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member) return message.channel.send('❕ Укажите существующего пользователя')
    else if (member.hasPermission("MANAGE_ROLES")) return message.channel.send('❌ Я не могу заглушить этого пользователя')

    let muterole = message.guild.roles.find(r => r.name = 'Muted')
    if (!muterole) muterole = await message.guild.createRole({
        name: 'Muted',
        color: 0xA50000
    })

    let reason = args.slice(1).join(' ') || 'Не указана'
    message.del(5000)
    if (member.roles.has(muterole.id)) return message.channel.send('❕ Пользователь уже заглушён')

    await member.addRole(muterole.id)
    await message.channel.send(`<${message.author.id}> заглушил <${member.id}>\n**Причина:** ${reason}`)
    await member.send(`❕Вы были заглушены пользователем <@${message.author.id}>\n**Причина:** ${reason}`)
}

exports.help = {
    name: "mute",
    description: "Заглушить пользователя",
    rule: "Куратор и выше",
    usage: ".mute [Пользователь: упоминание/ник] [причина]"
}