let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
┏━────────────━┓
            _*𝔐𝔎-𝔅𝔬𝔱*_
┗──────────────┛
╭───❉ *「  INFO 」 * ❉─────•>
╠➥ *IG : https://instagram.com/mikey69yt*
╠➥ *YT : https://www.youtube.com/channel/UC-gvvSafdb8tMSOgNMZeprQ*
╠➥ *Numero del creador : Wa.me/34698901397*
╠➥ *Creador : Mikey69YT*
╰──────────────•>
┏━❉ * ℑ𝔑𝔉𝔒 * ❉━┓
╠➠ *${_p}owner*
╠➠ *${_p}grouplist*
╠➠ *${_p}ping*
┗━━━━━━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^info$/i

module.exports = handler
