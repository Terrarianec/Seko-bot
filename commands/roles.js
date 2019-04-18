const Discord = require('discord.js');
const prefix = require('../config');

exports.run = async (bot, message, args) => {

    await message.delete().catch(O_o=>{});

    let us = message.author

    const a = message.guild.roles.get('558729703851032594'); 
    const b = message.guild.roles.get('558729852916727819'); 
    const c = message.guild.roles.get('558729907040157700'); 
    const s = message.guild.roles.get('474142157138296833');
    const DJ = message.guild.roles.get('471761815726981120');
    const nsfw = message.guild.roles.get('562528486363889674');

    const filter = (reaction, user) => ['🇦', '🇧', '🇨'].includes(reaction.emoji.name) && user.id === message.author.id;

    const Rembed = new Discord.RichEmbed()
        .setTitle('Доступные роли')
        .setDescription(`🇦 ${a.toString()}\n🇧 ${b.toString()}\n🇨 ${c.toString()}`)
        .addField('Другие роли', `💻 ${s.toString()}\n💿 ${DJ.toString()}`)
        .setColor(0x40E0D0)
        .setFooter(`Для: ${us.username}`);
        
    message.channel.send(Rembed).then(async msg => {

        await msg.react('🇦');
        await msg.react('🇧');
        await msg.react('🇨');
        await msg.react('💻');
        await msg.react('💿');
        await msg.react('🌚')

        msg.awaitReactions(filter, {
            max: 1,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '🇦':
                    if (message.member.roles.has(a.id)) {
                        msg.delete(2000);
                        message.member.removeRole(a).catch(err => {
                            console.log(err);
                            return message.channel.send(`Ошибка удаления роли: **${err.message}**.`);
                        });
                    }
                    message.member.addRole(a).catch(err => {
                        console.log(err);
                        return message.channel.send(`Ошибка добавления роли: **${err.message}**.`);
                    });
                    us.send(`Вам была добавлена роль **${a.name}**!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case '🇧':
                    if (message.member.roles.has(b.id)) {
                        msg.delete(2000);
                        message.member.removeRole(b).catch(err => {
                            console.log(err);
                            return message.channel.send(`Ошибка удаления роли: **${err.message}**.`);
                        });
                    }
                    message.member.addRole(b).catch(err => {
                        console.log(err);
                        return message.channel.send(`Ошибка добавления роли: **${err.message}**.`);
                    });
                    us.send(`Вам была добавлена роль **${b.name}**!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case '🇨':
                    if (message.member.roles.has(c.id)) {
                        msg.delete(2000);
                        message.member.removeRole(c).catch(err => {
                            console.log(err);
                            return message.channel.send(`Ошибка удаления роли: **${err.message}**.`);
                        });
                    }
                    message.member.addRole(c).catch(err => {
                        console.log(err);
                        return message.channel.send(`Ошибка добавления роли: **${err.message}**.`);
                    });
                    us.send(`Вам была добавлена роль **${c.name}**!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case 's':
                    if (message.member.roles.has(s.id)) {
                        msg.delete(2000);
                        message.member.removeRole(s).catch(err => {
                            console.log(err);
                            return message.channel.send(`Ошибка удаления роли: **${err.message}**.`);
                        });
                    }
                    message.member.addRole(s).catch(err => {
                        console.log(err);
                        return message.channel.send(`Ошибка добавления роли: **${err.message}**.`);
                    });
                    us.send(`Вам была добавлена роль **${s.name}**!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case 'DJ':
                    if (message.member.roles.has(DJ.id)) {
                        msg.delete(2000);
                        message.member.removeRole(DJ).catch(err => {
                            console.log(err);
                            return message.channel.send(`Ошибка удаления роли: **${err.message}**.`);
                        });
                    }
                    message.member.addRole(DJ).catch(err => {
                        console.log(err);
                        return message.channel.send(`Ошибка добавления роли: **${err.message}**.`);
                    });
                    us.send(`Вам была добавлена роль **${DJ.name}**!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                    case 'nsfw':
                    if (message.member.roles.has(nsfw.id)) {
                        msg.delete(2000);
                        message.member.removeRole(nsfw).catch(err => {
                            console.log(err);
                            return message.channel.send(`Ошибка удаления роли: **${err.message}**.`);
                        });
                    }
                    message.member.addRole(nsfw).catch(err => {
                        console.log(err);
                        return message.channel.send(`Ошибка добавления роли: **${err.message}**.`);
                    });
                    us.send(`Вам была добавлена роль **${nsfw.name}** 🌚`).then(m => m.delete(3000));
                    msg.delete();
                    break;
            }
        }).catch(collected => {
            return message.channel.send(`Я не могу вам добавить эту роль!`);
        });

    });

};

exports.help = {
    name: 'roles',
    description: "Выбери себе роль",
    usage: ".roles"
};