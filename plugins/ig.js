let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...donde esta la url?'
  let res = await fetch(global.API('xteam', '/dl/ig', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { name, username, likes, caption, data } = json.result
  let text = `
Nombre de usuario: ${name} *(@${username})*
${likes} Likes
Subtitulo:
${caption}
`.trim()
  for (let { data: url, type } of data)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), text, m)
}
handler.help = ['ig'].map(v => v + ' <enlace>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

handler.limit = true

module.exports = handler
