let limit = 10
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Ingrese el texto que desea', m)
if (text > 10) return conn.reply(m.chat, '*Texto demasiado largo!*\n_Maximo 10 letras!_', m)
let link = 'https://videfikri.com/api/textmaker/coffeecup/?text=' + text
conn.sendFile(m.chat, 'Mikey Mods.png', '_Aqui tienes mi rei_', m)
conn.fakeReply(m.chat, '*_Espere mientras se crea..._*','0@s.whatsapp.net','MK-Bot:))')
}
handler.help = ['coffee <texto>']
handler.tags = ['cfoto']
handler.command = /^(coffee)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null
handler.limit = true
module.exports = handler
