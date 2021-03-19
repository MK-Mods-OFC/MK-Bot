let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Quien quiere ser baneado?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta uno'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `Baneado con éxito`, m)
}
handler.help = ['banear']
handler.tags = ['owner']
handler.command = /^banear$/i
handler.owner = true
handler.mod = true

module.exports = handler
