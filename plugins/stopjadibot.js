let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '¿Por qué no vas directo a la terminal??', m)
  else {
    await conn.reply(m.chat, 'Adios bot :\')', m)
    conn.close()
  }
}
handler.help = ['apagar']
handler.tags = ['jadibot']
handler.command = /^(apagar)$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

