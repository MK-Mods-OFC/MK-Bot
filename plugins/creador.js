let handler = function (m) {
  this.sendContact(m.chat, '34698901397', 'Mikey69YT', m)
  //this.sendContact(m.chat, 'TU NUMERO', 'TU NOMBRE', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
