const config = require ('../config.json')
const Discord = require('discord.js');
const yt = require('ytdl-core');

module.exports = async (bot, message) => {
    const prefix = config.prefix

    if (message.author.bot) return // игнор сообщений бота
    if (message.guild) {

        const args = message.content.slice(prefix.length).trim().split(/ +/g) // аргументы для команд
        const commandName = args.shift().toLowerCase() // имя команды (можно будет в будущем сделать обработчик из этого)
        const command = bot.commands.get(commandName)

        if (message.content.startsWith(prefix)) {
        if (command) {  // Если ввели команду - выполняем ее

                try { 
                    command.run(bot, message, args)
                    // Мой обработчик команд, если хочешь можешь оставить
                    console.log(`\n[${new Date()}]`)
                    console.log(ccolor.green('Server: ') + `${message.guild.name} | ` + ccolor.cyan(`${message.guild.id}`))
                    console.log(ccolor.green('Channel: ') + `${message.channel.name} | ` + ccolor.cyan(`${message.channel.id}`))
                    console.log(ccolor.green('User: ') + `${message.author.tag} | ` + ccolor.cyan(`${message.author.id}`))
                    console.log(ccolor.green('Command: ') + `${prefix}${commandName}`)
                    console.log(ccolor.green('ARGS: ') + `${args.join(' ') || ccolor.yellow('Нет параметров для выполнения')}`)
                }
                catch (error)
                {
                console.error(error)
                message.reply('Произошла ошибка при выполнении этой команды')
            }
        }
    } 
}



    var me = "Сёко, "

    if(message.author === bot.user) return;
	if(message.content.startsWith(me + "будешь работать?")){ 
        answer = ["Да, конечно", "Я подумаю :wink:", "Нет, ни хатю :wink:"]; 
        message.channel.send(answer[Math.floor(Math.random() * answer.length)]); 
     } else {
		 if(message.content.startsWith(me + "вопрос: сколько")) {
			 answer = ["Несколько", "Многа", "Мала", "Это слишком большое число, я не могу его назвать :wink:", "Это слишком маленькое число, я не могу его назвать :wink:", "666", "9999"];
			 message.channel.send(answer[Math.floor(Math.random() * answer.length)]);
		 } else {
			 if(message.content.startsWith(me + "вопрос: почему")) {
				 answer = ["Хз", "Так надо", "Так сказал какой-то великий человек", "Потому что ананас :pineapple: *подарила ананас*"]; 
				 message.reply(answer[Math.floor(Math.random() * answer.length)]); 
			 } else {
			 if(message.content.startsWith(me + "вопрос:") || message.content.startsWith("А тебе, " + me + "нравится?")) {
			 answer = ["Да, конечно :upside_down: ", "Я подумаю :wink:", "Нет :upside_down: "];
			 message.channel.sendMessage(answer[Math.floor(Math.random() * answer.length)]);
			 };
			 };
		 };
	 };

	if(message.author === bot.user) return;
    if(message.content.startsWith("*" + "О" || "о" + "бнял" + " " || "а " || "о " + "Сёко" + "*")) {
        message.channel.send(" Обнимашки? :3 *обняла*", {
			files: ['http://ma1.narvii.com/6996/f5407c1a5209296018da8693d2a99bbaca297c90r7-320-180_hq.gif']	
		});
		
		bot.on('user', user => {
			user.addFriend();
		});
	 };
	 
	 if(message.content.startsWith(me + "я сказал подкрепление")) {
        message.channel.send("Подкрепление готово :3", {
			files: ['https://cdn.discordapp.com/attachments/415140575856295946/513367915878154263/3649a34f51ef813d83bb9bbd7f37739b.gif']	
			});
	 };
	 
	 if(message.content.startsWith(me + "требуется подкрепление")) {
        message.channel.send("Подкрепление готово", {
			files: ['https://i.imgur.com/kkBfZFT.gif']	
			});
	 };
	 
    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "представься")) {
	    message.channel.sendMessage("Я Shouko Nishimiya (Сёко Нисимия), персонаж аниме Koe no Katachi (Форма голоса)");
		message.channel.sendMessage("Ссылки на аниме:");
		message.channel.sendMessage("Anilibria - http://catcut.net/uriA");
		message.channel.sendMessage("AnimeDub - http://catcut.net/yriA");
        message.channel.sendMessage("Animevost - http://catcut.net/IriA");
		message.channel.sendMessage("Почему сокращённые ссылки :sweat_smile:?.. hacker хочет поставить бота на отдельный хостинг, чтобы бот работал круглые сутки, а вы вряд ли будете донатить :disappointed_relieved:... ");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "как тебя сделали")) {
        message.channel.sendMessage("После долгих попыток, сайтов http://catcut.net/jriA и http://catcut.net/lriA , и других приключений @GH(no)#7870 смог меня создать :sweat_smile:");
		message.channel.sendMessage("И @Bogdan#1349 дополнить");
	 };
    
    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "помоги")) {
		message.channel.sendMessage("```[Я] + будешь работать? =``` Проверка работоспособности");
        message.channel.sendMessage("```[Я] + представься =``` Я расскажу немного о себе");
		message.channel.sendMessage("```[Я] + как тебя сделали =``` История моего создания");
		message.channel.sendMessage("```[Я] + помоги =``` Я помогу со своими командами");
		message.channel.sendMessage("```[Я] + вопрос: =``` Я отвечу на вопрос");
	    message.channel.sendMessage("P.s. [Я] - `Сёко, `");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "доброе утро")) {
        message.channel.sendMessage(" Доброе утро :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "добрый день")) {
        message.channel.sendMessage(" Добрый день :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "добрый вечер")) {
        message.channel.sendMessage(" Добрый вечер :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "доброй ночи")) {
        message.channel.sendMessage(" И Вам :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(me + "хороший бот")) {
        message.channel.sendMessage("Спасибо :blush:.");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith("Спокойной ночи")) {
        message.channel.sendMessage("Спокойной ночи и сладких снов :3");
		
     };
     
    if (message.content.startsWith('<@!159985870458322944>')) {
        message.channel.send('Его префикс `!`.')
    }
    if (message.content.startsWith('<@!185476724627210241>')) {
        message.channel.send('Её префикс `=`.')
    }
    if (message.content.startsWith('<@!473762296640831539>')) {
        message.channel.send('Мой префикс `.`.')
    }

    if(message.channel.type == "dm") {
        let Membed = new Discord.RichEmbed()
        .setAuthor(`Сообщение в ЛС от ${message.author.username}`)
        .addField('Содержимое:', message.content)
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`ID: ${message.author.id} | ${message.author}`)
        
        bot.channels.get("561449999859318792").send(Membed)
    }

/* Убейте меня кто-нибудь
Я опять скопипастил 😭

let queue = {};

const cmds = {
	'play': (message) => {
		if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Добавьте музыку с помощью ${config.prefix}add`);
		if (!message.guild.voiceConnection) return cmds.join(message).then(() => cmds.play(message));
		if (queue[message.guild.id].playing) return message.channel.sendMessage('Уже играет');
		let dispatcher;
		queue[message.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return message.channel.sendMessage('Очередь пуста').then(() => {
				queue[message.guild.id].playing = false;
				message.member.voiceChannel.leave();
			});
			message.channel.sendMessage(`Играет: **${song.title}** по запросу: **${song.requester}**`);
			dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : config.passes });
			let collector = message.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(config.prefix + 'pause')) {
					message.channel.sendMessage('Воспроизведение остановлено').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(config.prefix + 'resume')){
					message.channel.sendMessage('Воспроизведение возобновлено').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(config.prefix + 'skip')){
					message.channel.sendMessage('Пропущено').then(() => {dispatcher.end();});
				} else if (m.content.startsWith(config.prefix + 'time')){
					message.channel.sendMessage(`Время: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
                play(queue[message.guild.id].songs.shift());
                message.channel.send('Воспроизведение окончено');
			});
			dispatcher.on('error', (err) => {
				return console.log('error: ' + err).then(() => {
					collector.stop();
					play(queue[message.guild.id].songs.shift());
				});
			});
		})(queue[message.guild.id].songs.shift());
	},
	'join': (message) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Не могу присоединиться 😅');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (message) => {
		let url = message.content.split(' ')[1];
		if (url == '' || url === undefined) return message.channel.sendMessage(`Вы должны указать YouTube-ссылку или id после ${config.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return message.channel.sendMessage('Ссылка недействительна: ' + err);
			if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = true, queue[message.guild.id].songs = [];
			queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
			message.channel.sendMessage(`Добавлен трек **${info.title}** в очередь`);
		});
	},
	'queue': (message) => {
		if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Добавьте несколько треков с помощью ${config.prefix}add`);
		let tosend = [];
		queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - по запросу: ${song.requester}`);});
		message.channel.sendMessage(`__**${message.guild.name} Очередь:**__ Сейчас **${tosend.length}** в очереди ${(tosend.length > 15 ? '*[Видны только следующие 15]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	}
};
	if (!message.content.startsWith(config.prefix)) return;
    if (cmds.hasOwnProperty(message.content.toLowerCase().slice(config.prefix.length).split(' ')[0])) cmds[message.content.toLowerCase().slice(config.prefix.length).split(' ')[0]](message); */
}