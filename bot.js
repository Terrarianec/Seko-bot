const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require ('./config.json');
var prefix = "Сёко, "

bot.on('message', message => {
    if(message.author === bot.user) return;
	if(message.content.startsWith(prefix + "будешь работать?")){ 
        answer = ["Да, конечно", "Я подумаю :wink:", "Нет, ни хатю :wink:"]; 
        message.channel.send(answer[Math.floor(Math.random() * answer.length)]); 
     } else {
		 if(message.content.startsWith(prefix + "вопрос: сколько")) {
			 answer = ["Несколько", "Многа", "Мала", "Это слишком большое число, я не могу его назвать :wink:", "Это слишком маленькое число, я не могу его назвать :wink:", "666", "9999"];
			 message.channel.send(answer[Math.floor(Math.random() * answer.length)]);
		 } else {
			 if(message.content.startsWith(prefix + "вопрос: почему")) {
				 answer = ["Хз", "Так надо", "Так сказал какой-то великий человек", "Потому что ананас :pineapple: *подарила ананас*"]; 
				 message.reply(answer[Math.floor(Math.random() * answer.length)]); 
			 } else {
			 if(message.content.startsWith(prefix + "вопрос:") || message.content.startsWith("А тебе, " + prefix + "нравится?")) {
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
	 
	 if(message.content.startsWith(prefix + "я сказал подкрепление")) {
        message.channel.send("Подкрепление готово :3", {
			files: ['https://cdn.discordapp.com/attachments/415140575856295946/513367915878154263/3649a34f51ef813d83bb9bbd7f37739b.gif']	
			});
	 };
	 
	 if(message.content.startsWith(prefix + "требуется подкрепление")) {
        message.channel.send("Подкрепление готово", {
			files: ['https://i.imgur.com/kkBfZFT.gif']	
			});
	 };
	 
    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "представься")) {
	    message.channel.sendMessage("Я Shouko Nishimiya (Сёко Нисимия), персонаж аниме Koe no Katachi (Форма голоса)");
		message.channel.sendMessage("Ссылки на аниме:");
		message.channel.sendMessage("Anilibria - http://catcut.net/uriA");
		message.channel.sendMessage("AnimeDub - http://catcut.net/yriA");
        message.channel.sendMessage("Animevost - http://catcut.net/IriA");
		message.channel.sendMessage("Почему сокращённые ссылки :sweat_smile:?.. hacker хочет поставить бота на отдельный хостинг, чтобы бот работал круглые сутки, а вы вряд ли будете донатить :disappointed_relieved:... ");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "как тебя сделали")) {
        message.channel.sendMessage("После долгих попыток, сайтов http://catcut.net/jriA и http://catcut.net/lriA , и других приключений @GH(no)#7870 смог меня создать :sweat_smile:");
		message.channel.sendMessage("И @Bogdan#1349 дополнить");
	 };
    
    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "помоги")) {
		message.channel.sendMessage("```[Я] + будешь работать? =``` Проверка работоспособности");
        message.channel.sendMessage("```[Я] + представься =``` Я расскажу немного о себе");
		message.channel.sendMessage("```[Я] + как тебя сделали =``` История моего создания");
		message.channel.sendMessage("```[Я] + помоги =``` Я помогу со своими командами");
		message.channel.sendMessage("```[Я] + вопрос: =``` Я отвечу на вопрос");
	    message.channel.sendMessage("P.s. [Я] - `Сёко, `");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "доброе утро")) {
        message.channel.sendMessage(" Доброе утро :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "добрый день")) {
        message.channel.sendMessage(" Добрый день :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "добрый вечер")) {
        message.channel.sendMessage(" Добрый вечер :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "доброй ночи")) {
        message.channel.sendMessage(" И Вам :3");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith(prefix + "хороший бот")) {
        message.channel.sendMessage("Спасибо :blush:.");
	 };

    if(message.author === bot.user) return;
    if(message.content.startsWith("Спокойной ночи")) {
        message.channel.sendMessage("Спокойной ночи и сладких снов :3");
		
	 };

});

bot.login(config.token);
bot.on('ready', () => {
	console.log(`${bot.user.username} online`);
	bot.user.setPresence({status: 'online', game:{name: 'на страдания Хакера', type: "WATCHING"}});
});