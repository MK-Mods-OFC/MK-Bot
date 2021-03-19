let handler = async (m, { conn, participants }) => {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('Hecho!')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true
handler.mod = true

module.exports = handler
