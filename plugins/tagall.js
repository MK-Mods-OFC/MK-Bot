let limit = 20
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
	let user = global.DATABASE._data.users[m.sender]
  if (user.registered === false) throw `No se ha registrado, ficticio, escriba / regístrese primero`
     let [l, r] = text.split `|`
         if (!l) return conn.reply(m.chat, 'por favor, escriba su nombre\nejemplo: *#tagall MK Mods|Quiero a todos activos*', m)
    if (!r) return conn.reply(m.chat, 'Por favor ingrese su mensaje', m)

  let users = participants.map(u => u.jid)
  conn.reply(m.chat, '╭─ ❏「 *TAG ALL* 」\n│\n├ ❏ *Nombre:* ' + l +  '\n├ ❏ *Mensaje:* ' + r +'\n│\n' + users.map(v => '├ ❏ @' + v.replace(/@.+/, '')).join`\n`, m, {
    contextInfo: { mentionedJid: users }
 
  
})
}
handler.help = ['tagall <texto>']
handler.tags = ['admin']
handler.command = /^tagall$/i
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
