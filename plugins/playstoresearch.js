let limit = 10
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [kata] = text.split `|`

    if (!kata) return conn.reply(m.chat, 'Ingrese una palabra', m)
  await m.reply('_Buscando..._')
	axios.get(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${kata}`).then ((res) => {
	 	let hasil = res.data.result.map(res=>`*➸ Título: ${res.title}*\n*➸ ${res.appid}*\n*➸ Dev: ${res.developer}*\n*➸ Clasificación: ${res.rating}*\n*➸ Enlace: ${res.url}*`).join('\n\n')

    conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(playstore)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
