const xpperlimit = 999999999999999999999999 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^comprar/i, '')
  count = count ? /todo/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} XP\n+ ${count} Limite`, m)
  } else conn.reply(m.chat, `XP no es suficiente para comprar ${count} limite`, m)
}
handler.help = ['comprar limite', 'comprartodo']
handler.tags = ['xp']
handler.command = /^comprar([0-9]+)|comprar|comprartodo$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

