let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Reiniciando el bot...\nEspere aproximadamente 1 minuto')
    await global.DATABASE.save()
    process.send('reset')
  } else throw '_Al toque..._'
}
handler.help = ['reiniciar' + (process.send ? '' : ' (No funciona)')]
handler.tags = ['host']
handler.command = /^reiniciar$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

