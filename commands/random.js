exports.run = async (bot,message, args) => {
    if (!args[0] & !args[1]) {
        let random = Math.random(); 
        let msg = message.channel.send("Сгенерировано случайное число: " + random )
        await message.delete(60000)
        msg.delete(5000)
    }

    if (args[0] && !args[1]) return message.channel.send('Недостаточно данных')

    if (args[0] & args[1]) {
        let min = args[0]
        let max = args[1]
        let random = Math.floor(Math.random() * max) + +min; 
        let msg = message.channel.send("Сгенерировано случайное число: " + random );
        await message.delete(60000)
        msg.delete(5000)
    }
}

exports.help = {
    name: "random",
    description: "Генератор случайного числа",
    usage: ".random / .random (минимальное число) (максимальное число)"
}