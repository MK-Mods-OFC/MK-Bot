let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
  let darkjokes = await url.json()
let hasil = `_*➸ Esperar..*_`

  m.reply(hasil)
  conn.sendFile(m.chat, darkjokes.result, 'filename', '_*Al toque mi rey*_')
}
handler.command = /^darkjokes$/i
handler.register = true
handler.limit = true

module.exports = handler
