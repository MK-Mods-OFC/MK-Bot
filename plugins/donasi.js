let handler = async m => m.reply(`
╭─〘 DONACIONES 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/darklegendwa]
│ • Pero con que te suscribas a mi canal basta:)
│ https://www.youtube.com/channel/UC-gvvSafdb8tMSOgNMZeprQ
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
