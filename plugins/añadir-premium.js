const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Etiquete uno de ellos e ingrese el número para verificación!'
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Hecho con éxito agregado Usuario✅*\n\n*Número : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Caducado:* 30Days\n*Gracias por agregar Premium!*`)
}
handler.help = ['addprems <numero>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.owner = true
handler.mod = true

module.exports = handler
