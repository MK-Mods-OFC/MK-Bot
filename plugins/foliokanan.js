let limit = 10
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Introduzca texto que desea', m)
if (text > 9999999999) return conn.reply(m.chat, '*Texto demasiado largo!*\n*Maximo 10 letras*', m)
let link = 'http://zekais-api.herokuapp.com/foliokanan?text=' + text
conn.sendFile(m.chat, link, 'Mikey Mods.png', '_Al toque mi rey_', m)
conn.fakeReply(m.chat, '*_Espere mientras se crea..._*','0@s.whatsapp.net','MK-Bot:))')
}
handler.help = ['foliokanan <texto>']
handler.tags = ['cfoto']
handler.command = /^(foliokanan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null
handler.limit = true
module.exports = handler
