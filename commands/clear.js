exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS") && message.author.id != '370432461475151873') return message.channel.send('❌ Недостаточно прав на использование команды!')
    
    let count = args[0] || 1
    if(count === 'all') count = 100
    
    await message.delete()
    await message.channel.bulkDelete(count)
    
}

exports.help = {
    name: "clear",
    description: "Очистка сообщений",
    rule: "Куратор и выше",
    usage: ".clear (кол-во)"
}