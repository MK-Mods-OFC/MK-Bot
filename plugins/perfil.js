let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nSobre: ' + about : ''}
Número: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
Enlace: https://wa.me/${who.split`@`[0]}${registered ? '\nEdad: ' + age : ''}
XP: ${exp}
Límite: ${limit}
Registrado: ${registered ? 'Sí (' + new Date(regTime) + ')': 'No.'}${lastclaim > 0 ? '\nÚltimo reclamo: ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['perfil [@user]']
handler.tags = ['tools']
handler.command = /^perfil$/i
module.exports = handler

