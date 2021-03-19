let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [tgl, bln, thn] = text.split `-`

    if (!tgl) return conn.reply(m.chat, 'Ingrese la fecha', m)
    if (!bln) return conn.reply(m.chat, 'Ingrese el mes', m)
    if (!thn) return conn.reply(m.chat, 'Ingrese el año', m)

  await m.reply('Buscando...')
	axios.get(`https://videfikri.com/api/primbon/tgljadian/?tgl=${tgl}&bln=${bln}&thn=${thn}`).then ((res) => {
	 	let hasil = `*➸ El significado de la fecha:* ${res.data.result.hasil}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(tgljadian)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
