exports.run = async (bot, message, args) => {

    let BM = args.slice(0).join(' ')

    if(!BM) return message.channel.send('Здесь должен быть текст')

    let mess = await message.channel.send(`Голосование: ${BM}`)
    
    await mess.react('✔')
    await mess.react('❌')
    
    const collector = mess.createReactionCollector((reaction, user) => reaction.emoji.name === '✔' || reaction.emoji.name === '❌' && user.id == message.author.id, {time: 720000})
    
    collector.on('collect', async r => {
        switch(r.emoji.name) {
        case '❌': 
        await mess.edit(`Идёт голосование`)
        break
        case '✔':
        await mess.edit(`Идёт голосование`)
        break
        }
    })

    collector.on('end', async () => {
        await mess.edit(`Голосование окончено`)
    })
}

exports.help = {
    name: "q",
    description: "Создание опроса",
    usage: ".q [текст]"
}
