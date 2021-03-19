let limit = 10
let handler = async(m, { conn, text }) => { 
if (!text) return conn.reply(m.chat, 'Introduzca el parámetro de texto', m) 
if (text > 10) return conn.reply(m.chat, '*Texto demasiado largo!*\n_¡Hasta 10 letras!_', m)
let link = 'https://api.zeks.xyz/api/logobp?text=' + text + '&apikey=apivinz'
conn.sendFile(m.chat, link, 'bokehtext.png', '_Al toque mi rey_', m)
conn.fakeReply(m.chat, '*_Espere mientras se crea..._*','0@s.whatsapp.net','MK-Bot:))')
}
handler.help = ['blackpink <texto>']
handler.tags = ['cfoto']
handler.command = /^(blackpink)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null
handler.limit = true
module.exports = handler
