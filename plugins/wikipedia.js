let limit = 10
const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
        let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, '_Ingrese lo que busca_', m)
    new Promise((resolve, reject) => {
        axios.get(`https://ardhixsquerpants.herokuapp.com/api/wiki?q=` + encodeURIComponent(text))
            .then((res) => {
                      
                const ardi = `*• Según WIKIPEDIA :* ${res.data.result}`
                conn.reply(m.chat, ardi, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.command = /^wiki$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
