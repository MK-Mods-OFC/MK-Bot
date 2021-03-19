let limit = 10
let handler = async (m, { conn, text }) => {
if (!text) throw '_Envía un mensaje de texto_'
let [atas, bawah] = text.split('|')
await conn.sendFile(m.chat, global.API('https://api.zeks.xyz', '/api/gtext', {
 text1: atas,
 text2: bawah,
 theme: 'gtext',
 apikey: 'apivinz'
}), 'error', '_Al toque mi rey_', m)
}
handler.help = ['glitch <texto|texto2>']
handler.tags = ['cfoto']
handler.command = /^glitch$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
module.exports = handler
