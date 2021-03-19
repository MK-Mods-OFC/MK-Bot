let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '¿Quién quiere ser desbaneado??'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta uno'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `desbaneado con éxito`, m)
}
handler.help = ['desbanear']
handler.tags = ['owner']
handler.command = /^desbanear$/i
handler.owner = true
handler.mod = true

module.exports = handler
