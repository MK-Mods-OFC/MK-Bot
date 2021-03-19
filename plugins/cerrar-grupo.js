let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*¡Formato incorrecto! Ejemplo :*\n\n	*○ ${usedPrefix + command} cerrado*\n	*○ ${usedPrefix + command} abierto*`, m)
	} else if(args[0] == 'abierto') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
	} else if(args[0] == 'cerrado') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*¡Formato incorrecto! Ejemplo :*\n\n	*○ ${usedPrefix + command} cerrado*\n	*○ ${usedPrefix + command} abierto*`, m)
	} 
}
handler.help = ['grupo *abierto / cerrado*']
handler.tags = ['group']
handler.command = /^(grupo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
