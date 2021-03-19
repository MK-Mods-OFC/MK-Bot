let limit = 10
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let fontPath = 'src/font/Zahraaa.ttf'
let handler  = async (m, { conn, args }) => {
  let inputPath ='src/kertas/magernulis1.jpg'
  let outputPath = 'tmp/hasil.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let teks = args.join` `
  spawn('convert', [
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    teks,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
    conn.sendFile(m.chat, outputPath, 'nulis.jpg', 'Tenga cuidado: v', m)
  })
}
handler.help = ['n'].map(v => v + 'ulis <texto>')
handler.tags = ['nulis']
handler.command = /^nulis$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

handler.limit = true

module.exports = handler