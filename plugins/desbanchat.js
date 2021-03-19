let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Hecho!')
}
handler.help = ['desbanchat']
handler.tags = ['owner']
handler.command = /^desbanchat$/i
handler.owner = true
handler.mod = true

module.exports = handler
