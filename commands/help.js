const Discord = require("discord.js")
const config = require("../config.json");
const prefix = config.prefix

exports.run = async (bot, message, args) => {
    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var Сembed = new Discord.RichEmbed()
            .setColor(config.color)
            .setAuthor(`Команды`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`Префикс бота: ${prefix}\n\n**Команда:** ${command.help.name || 'Команды не существует или она временно'}\n**Описание:** ${command.help.description || "Отсутствует"}\n**Использование:** ${command.help.usage || "Отсутсвует"}\n**Права:** ${command.help.rule || 'Кто-угодно, не нарушивший правила'}`)
            message.channel.send(Сembed);
        } else {
            message.channel.send(`Команды ${command} не существует, или она временно отключена из-за неработоспособности`)
        }}

    if(!args[0]) {
        message.delete();

        let Hembed = new Discord.RichEmbed()
        .setColor(config.color)
        .setAuthor(`Команды ${bot.user.username}`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription('Префикс: `.` | Для информации о команде введите ``.help [команда]``')
        .setTimestamp()
        .addField(`Команды:`, "**``ban`` ``clear`` ``echo`` ``edit`` ``help`` ``kick`` ``mute`` ``q`` ``random`` ``report`` ``roles`` ``send`` ``serverinfo``**")
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)

        message.channel.send(Hembed)
    }
}

exports.help = {
    name: "help",
    description: "Помощь с командами",
    usage: ".help / .help [команда]"
}