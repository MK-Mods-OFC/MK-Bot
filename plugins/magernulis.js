let limit = 10
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, text }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 text,
await conn.sendFile(m.chat, global.API('xteam', '/magernulis', { text, nama: conn.getName(m.sender), kelas: ' ' }, 'APIKEY'), 'nulis.jpg', 'Nahhh ya terminó..\nSuscribete Youtube: *MK-Mods Oficial*', m)
}
handler.help = ['magern'].map(v => v + 'ulis (texto)')
handler.tags = ['nulis']
handler.command = /^magernulis$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

handler.limit = true

module.exports = handler
