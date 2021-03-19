const translate = require('translate-google-api')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `ejemplo: \n\n${usedPrefix}tr es|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/languages`

    let [to, trans] = text.split`|`

    if (!to) return conn.reply(m.chat, `Introduzca el parámetro para\n ejemplo: \n\n${usedPrefix}tr es|thankyou`, m)
    if (!trans) return conn.reply(m.chat, `Por favor ingrese el parámetro de texto\n ejemplo: \n\n${usedPrefix}tr es|thankyou`, m)

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(m.chat, `${text}\n\nTraducir: ` + result[0])
    } catch (e) {
        m.reply('_Error!_')
    }

}
handler.help = ['traducir'].map(v => v + ' <idioma>|<texto>')
handler.tags = ['tools']
handler.command = /^(traducir?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

