let handler = async (m, { conn, command, args }) => {
  let chats = args.length > 0 && /grupo|gc/i.test(args[0]) ? conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid) : [m.chat]
  let isDelete = /^(eliminar)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'eliminar').catch(console.log)
    await conn.modifyChat(id, 'mutear', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ' se ha abierto el chat grupal' + (isDelete ? 'limpio' : 'para siempre'), m)
}
handler.help = ['eliminarchat', 'eliminarchat grupo', 'mutearchat', 'mutearchat grupo']
handler.tags = ['owner']
handler.command = /^(eliminar|mutear)chat$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

