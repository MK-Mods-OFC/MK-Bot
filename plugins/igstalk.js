let package = require('./package.json')
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...donde esta el nombre de usuario?'
  let res = await fetch(global.API('xteam', '/dl/igstalk', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    full_name,
    username,
    is_verified,
    media_count,
    follower_count,
    following_count,
    biography,
    external_url,
    profile_pic_url,
    hd_profile_pic_url_info,
    is_private
  } = json.result.user
  let pp = hd_profile_pic_url_info.url || profile_pic_url
  let caption = `
${full_name} *(@${username})* ${is_verified ? '✓' : ''}
https://instagram.com/${username}
${is_private ? 'Publicación oculta por usuario' : ('*' + media_count + '* Correo(s)')}
Siguiente *${following_count}* Usuario(s)
*${follower_count}* Seguidores
*Bio:*
${biography}${external_url ? '\n*URL externa:* ' + external_url : ''}

Creado por: '${package.author.name}
`.trim()
  if (pp) conn.sendFile(m.chat, pp, 'ppig.jpg', caption, m)
  else m.reply(caption)
}
handler.help = ['igstalk'].map(v => v + ' <nombre de usuario>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

module.exports = handler
