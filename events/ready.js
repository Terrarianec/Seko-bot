module.exports = async (bot, message) => {
    
    console.log(ccolor.green(`${bot.user.username} запущен!`))

	bot.user.setPresence({
        status: 'online', 
        game: {
            name: 'аниме 24/7', 
            type: "WATCHING"
        }
    })
}