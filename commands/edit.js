module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id != '370432461475151873') return message.channel.send('Недостаточно прав на использование команды!')

    let msgid = args[0]
    let content = args.slice(0).join(' ')

    if(!msgid || !content) return message.channel.send('❌ Укажите все аргументы команды')

    await message.channel.fetchMessage(msgid)
    .then(async msg => {
    if(!msg) return message.channel.send('Сообщение не найдено')
    await msg.edit(content)
}).catch(console.error)
}

exports.help = {
    name: "edit",
    description: "Редактирует недавнее сообщение",
    rule: "Куратор и выше",
    usage: ".edit [сообщение]"
}