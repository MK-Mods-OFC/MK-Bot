let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [nama, lahir] = text.split `|`

    if (!nama) return conn.reply(m.chat, 'por favor, escriba su nombre', m)
    if (!lahir) return conn.reply(m.chat, 'Ingresa tu fecha de nacimiento correctamente!\n\nEjemplos : /zodiak Ardi|11-6-2004', m)

  await m.reply('Buscando...')
	axios.get(`https://arugaz.herokuapp.com/api/getzodiak?nama=${nama}&tgl-bln-thn=${lahir}`).then ((res) => {
	 	let hasil = `*INFORMACIÓN ZODIACAL*\n\nNacido : ${res.data.lahir}*\nCumpleaños : ${res.data.ultah}\nEdad : ${res.data.usia}\nZodíaco : ${res.data.zodiak}️`

    conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(zodiak)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 20
handler.limit = false

module.exports = handler
