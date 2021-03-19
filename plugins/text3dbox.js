let limit = 10
let handler = async (m, { conn, text }) => {
if (!text) throw '_Y el texto?_'
let [kiri] = text.split('|')
await conn.sendFile(m.chat, global.API('https://api.zeks.xyz', '/api/text3dbox', {
 text: kiri,
 theme: 'text3dbox',
 apikey: 'apivinz'
}), 'error', '_Al toque mi rey_', m)
}
handler.help = ['3dbox <texto>']
handler.tags = ['cfoto']
handler.command = /^3dbox$/i
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
