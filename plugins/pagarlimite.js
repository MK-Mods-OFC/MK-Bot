let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Ingrese el número de límites que se darán'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta uno'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Solo números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'Mínimo 1'
    let users = global.DATABASE._data.users
    if (limit > users[m.sender].limit) throw 'Límite insuficiente para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Límite) + (${-pjk} Límite (Impuesto 2%)) = ( ${-limit} Límite)`)
    conn.fakeReply(m.chat, `+${poin} Límite`, who, m.text)
}
handler.help = ['pagarlimite @user <cantidad>']
handler.tags = ['xp']
handler.command = /^pagarlimite$/
handler.owner = false
handler.mod = false

module.exports = handler

