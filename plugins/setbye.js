let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Bye está configurado correctamente\n@user (mencion)')
  } else throw 'Donde esta el texto?'
}
handler.help = ['setbye <texto>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
handler.admin = true
module.exports = handler

