const { default: dzinConnect, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys") 

//bagian constant module
const fs = require("fs") 
const path = require("path") 
const os = require("os") 
const axios = require("axios") 
const readline = require("readline") 
const fileType = require("file-type") 
const chalk = require("chalk") 
const nodeCache = require("node-cache") 
const pino = require("pino")

//function penting
const pairingCode = true 
const readlineQuoted = readline.createInterface({ input: process.stdin, output: process.stdout }) 
const question = (text) => new Promise((resolve) => readlineQuoted.question(text, resolve)) 

//function perintah & message 
const { functionMessage, messagesMention } = require('./lib/function') 

//function connection
async function dzinStart() {
  const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) }) 
  const { state, saveCreds } = await useMultiFileAuthState('session') 
  
  const dzin = await dzinConnect({ 
    version: [2, 3000, 1017531287], 
    browser: Browsers.ubuntu('Chrome'), 
    syncFullHistory: true, 
    printQRInTerminal: !pairingCode, 
    logger: pino({ level: "silent" }), 
    auth: state, 
    generateHighQualityLinkPreview: true, 
    cachedGroupMetadata: async (jid) => groupCache.get(jid), 
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined) 
        return msg?.message || undefined
      } 
      return {
        conversation: 'Whatsapp Bot By Dzin'
      }
    }
  }) 
  
  //function pairingCode 
  if (pairingCode && !dzin.authState.creds.registered) {
    let phoneNumber 
    phoneNumber = await question("Masukkan nomor whatsapp anda :\n") 
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '') 
    let code = await dzin.requestPairingCode(phoneNumber, "DZINELIT") 
    code = code.match(/.{1,4}/g).join(" - ") || code 
    await console.log(`Kode pairing anda :\n${code}`) 
  } 
  
  //Tempat masuknya session 
  dzin.ev.on('creds.update', await saveCreds) 
  
  //Connection terhubung
  dzin.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update 
    if (connection === 'close') {
      dzinStart()
    } else if (connection === 'open') {
      console.log(`Berhasil terhubung`)
    }
  }) 
  
  await store.bind(dzin.ev) 
  await functionMessage(dzin, store) 
  
  dzin.ev.on('messages.upsert', async (message) => {
    await messagesMention(dzin, message, store) 
  }) 
  
  dzin.ev.on('contacts.update', (update) => {
    for (let contact of update) {
      let id = 
      dzin.decodeJid(contact.id) 
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
    }
  })
  
  return dzin
} 

dzinStart() 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})