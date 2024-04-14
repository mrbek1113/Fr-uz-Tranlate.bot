const { translate } = require('@vitalets/google-translate-api')
const { Telegraf } = require('telegraf')
const bot = new Telegraf('7043972670:AAGHSBhi0GI8E4UqEX5HuuFAMmjld7CLZSs')

bot.start(ctx => ctx.reply('Assalomu alekum, tarjimon botga hush kelibsiz🤗'))
bot.on('text', async (ctx) => {
    try {
        const textMessage=ctx.message.text
        const { text } = await translate(textMessage, { from: 'uz', to: 'fr' });
        await ctx.reply(text);
    } catch (e) {
        await ctx.reply(JSON.stringify(e))
    }
})

bot.launch()