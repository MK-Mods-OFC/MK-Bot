const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
	let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, '_Ingrese lo que busca_', m)
    new Promise((resolve, reject) => {
        axios.get(`http://api-iam.herokuapp.com/api/cuaca?q=` + encodeURIComponent(text))
            .then((res) => {
                        
                const teks = `• *KOTA : ${res.data.result.tempat}*\n• *TEMPERATURA : ${res.data.result.suhu}*\n• *HUMEDAD : ${res.data.result.kelembapan}*\n• *UDARA : ${res.data.result.udara}*\n• *ANGINA : ${res.data.result.angin}*\n• *TIEMPO : ${res.data.result.cuaca}*\n• *DESCRIPCION : ${res.data.result.desk}*`
                conn.reply(m.chat, teks, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.command = /^(tiempo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 10
handler.limit = false

module.exports = handler
