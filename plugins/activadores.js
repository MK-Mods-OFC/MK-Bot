let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /actiavr/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  switch (type) {
    case 'bienvenida':
      chat.welcome = isEnable
      break
    case 'eliminar':
      chat.delete = isEnable
      break
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    default:
      return m.reply(`
Lista de opciones: bienvenida | eliminar | publico | antilink

Ejemplo:
${usedPrefix}activar bienvenida
${usedPrefix}desactivar bienvenida
`.trim())
  }
  m.reply(`
*${type}*tuvo éxito en *${isEnable ? 'fuego' : 'morir'}derecho* a ${isAll ? 'este bot' : 'este chat'}
`.trim())
}
handler.help = ['ac', 'desac'].map(v => v + 'tivar <opcion>')
handler.tags = ['group', 'owner']
handler.command = /^((ac|desac)tivar)$/i

module.exports = handler
