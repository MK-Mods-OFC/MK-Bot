let limit = 10
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Introduzca el texto que desee', m)
if (text > 10) return conn.reply(m.chat, '*Texto demasiado largo!*\n_Maximo 10 letras!_', m)
let link = 'https://videfikri.com/api/textmaker/narutobanner/?text=' + text
conn.sendFile(m.chat, link, 'Mikey Mods.png', '_Al toque mi rey_', m)
conn.fakeReply(m.chat, '*_Espere mientras se crea..._*','0@s.whatsapp.net','MK-Bot:))')
}
handler.help = ['naruto <texto>']
handler.tags = ['cfoto']
handler.command = /^(naruto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null

handler.limit = true
module.exports = handler
