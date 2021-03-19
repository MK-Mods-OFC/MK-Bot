let limit = 10
const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
        let user = global.DATABASE._data.users[m.sender]
    if (!text) return conn.reply(m.chat, '_Ingrese lo que busca_', m)
    new Promise((resolve, reject) => {
        axios.get(`https://ardi30.herokuapp.com/api/v1/lirik?l=` + encodeURIComponent(text))
            .then((res) => {
                      
                const ardi = `*• Letra de :* ${res.data.data}`
                conn.reply(m.chat, ardi, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['lirik <texto>']
handler.tags = ['tools']
handler.command = /^lirik$/i
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
