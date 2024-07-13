const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.port = 5000  ;
global.devs = ["923184474176"];
global.sudo = process.env.SUDO || "923184474176"; 
global.owner  = process.env.OWNER_NUMBER || '923184474176';
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi';
global.location  =  process.env.LOCATION || 'Lahore Pakistan';
global.blockJids = process.env.BLOCK_JID || '120363023983262391@g.us';
global.allowJids = process.env.ALLOW_JID || '120363022922797633@g.us';
global.THUMB_IMAGE = process.env.BOT_PIC || 'https://i.imgur.com/NpA3ZsJ.jpeg';
global.url  =  process.env.YOUR_SITE_URL || 'https://youtube.com/c/SuhailTechInfo'; 
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Aviator-Md';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority";

module.exports = {

  menu : process.env.MENU  || '',          /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  LANG : process.env.THEME || 'SUHAIL',

  HANDLERS: process.env.PREFIX || ',',
  BRANCH :  process.env.BRANCH || 'main',
  WORKTYPE:process.env.WORKTYPE|| 'public',
  VERSION: process.env.VERSION || 'v.0.0.1',
  botname:process.env.BOT_NAME || 'Aviator-Md', 
  caption: process.env.CAPTION || '*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ Aviator²²¹-ᴍᴅ•*',

  sessionId: process.env.SESSION_ID || 'Avitor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1OU2dHMlpDK0tOTFc0WEN1SDhVSm8zTXdabVFwTmtndFhrcDM2L1duRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlZqNEdrQVBxanpSSnpqMndlYlRxSTZvZkRka0c3dE52d0tJNUZaOWd5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTE9Jd3IxSDVEWWlOYjA5azJGWU9JdEVmRGt2QlV0Snp2NlN5NXNPL1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1TkdEVnFNalBJMUozKzVwcEE1Z1BxY0crRmp0Qi9pM1luekpRam9zQmhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CRGhGR09NZXNsemw3U3NVZEN4Q2VaNk1oY2thbW00YTFFZzFURTJUWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcyeTduWjE1ZGpnMjhVaVI3d1ppTGtXaHMrZEJRMmtSRzhhd0xJTklPd2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFoRTFPWTRPZHVYWTIzYy8yZ0FYUnZiUHJmaU1pb2JESFgvQjRQVDJGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjhKZWhwK0xpZDFnS1l5SVVHWXg5cERGd0toNFc1T0hyMmFJS25QdTVITT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNxci9tc21TblVFdk1tTGpnYkJRc1pOS2xjNmdsYkhTSm9EZnZkNkh1VzcweU9JNytMMGgrYjdBbUtyWHZseUY3cEhaTmVwU2g3STBkTTJNamJBdER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiY2xRZmtqc09OSFF1UmlQVnkyQ2hwVElKVE5TNW5YSjQ1empnOHFLdHpsMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMHNEQnkwUHJSX0tlMnFJcEFxalNEQSIsInBob25lSWQiOiIxMGIxMjVjYS1lMGJmLTQwZTYtOTM0MC1iOWM1MzAzMjhkN2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWJpbUVQMkpSZTkraFZNczY0WEttQWlYWXhvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhkQ1RaWTVNeDE2SXFiRkw2dEhkdHA1clN2bz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFWE5TNkpERiIsIm1lIjp7ImlkIjoiOTIzMDcyMzgwMzgwOjYxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IjpvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNkE5SXdHRUszaHk3UUdHQ1lnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxYlpSOVhybDlsUnBmb0ZaWTJHdWlCRDFLak9pUnN2ejVBSTVxalM0bW5NPSIsImFjY291bnRTaWduYXR1cmUiOiJmd09ya05wdUhySFZCWlQyMHNtM0RFYmh3enArRWw3SVlyMk5NalNHTEVtZnBMUDFkell3NmVyWFRCM2c4UXhSQ3Q4SW5SYUpmOUsyMStqK3loVVFCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT2hqaWZNaVMxY3c1cEo0TEdKR1QrNTdDclJGQk51Zzh6V2RQOXdFblF2NlNiZDFOYTdZM1ZNN1lXcDRHYzFEYm5LZGo1aWpxMmZqMUV3K0hVRHV2QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzIzODAzODA6NjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYW0yVWZWNjVmWlVhWDZCV1dOaHJvZ1E5U296b2tiTDgrUUNPYW8wdUpweiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDkwNTkxMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFMEYifQ==',      //======[Put Your Session Id Here]======\\
  warncount: process.env.WARN_COUNT || '3',
  disablepm: process.env.DISABLE_PM || 'true',
  MsgsInLog:process.env.MSGS_IN_LOG || 'false',
  ownername: process.env.OWNER_NAME || 'Suhail',
  packname :  process.env.PACK_NAME || 'Aviator-Md' ,
  author :  process.env.PACK_AUTHER || 'Wa Bot Creator',

  autoreaction: process.env.AUTO_REACTION || 'false',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  readmessage :  process.env.READ_MESSAGE || 'false',
  read_status:process.env.AUTO_READ_STATUS|| 'false',
  save_status:process.env.AUTO_SAVE_STATUS|| 'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'xxx,sex',
  REMOVE_BG_KEY:process.env.REMOVE_BG_KEY || 'Nh4iTxEH5k3vmHugFqoYktGM',
  antilink :  process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',

  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilinkaction : process.env.ANTILINK_ACTION || 'remove',
  OPENAI_API_KEY :  process.env.OPENAI_API_KEY || undefined,
  HEROKU_API_KEY :  process.env.HEROKU_API_KEY || undefined,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || undefined,

};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
