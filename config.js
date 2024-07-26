const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94716159814'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sandarubandara001@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94716159814"
global.devs = '94716159814';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9nMnFKUkFldlpQcER5cndGTDNDUktRME8xTHdrOUNPYmlwTTFmSUpVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYW9zaVQ0N1ErRk5DYitDYndEN1F3aW90QUlxWGFWRWdBdUJ2QW5FYnFqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTjVtVlN2ZUo0Q25QMXpWZFcrL2ZCbFMvL0x2ZnZEOC9FL0lCOFdDZW04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqWU5BZ3M0WGJkRFBYcy9vOFNwbCtXUTA3dHA4cXNweExLT2hiR0sva2kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPQm0weHRoTkthYkZYL1hBOG5YblovMmJuS3lxcSt2OXYzekc5bDBIRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVyUU9pN3EvcmtOdEFHcVJ0ZDBaQUpWVjd4YXozdVlheWdSdHdqK3FaeEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZDSTJYTkhRK0Q1eDExKzFzems3UTZyYzM0MksybFlZaFhkL2p0cVhGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODJ1akl6b0dLVzFjdlMwbWdvQWFHM0V2V2d4cW9aWjJndUlNSUtpdllFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink3T0JZZ1JDVzJleXNiaTJxWU8rUWdOUWY5YnhkbDZRelFiZWFDNjVlbENYbjNmMThnOHhXNGdzV3VTakd0RTZMbGwweU4wT091alQvZjVSRVFkeURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJlV0VjVUF1SXlhL2kyZXZXelhRM3lQRkpKc0llNlZlSHlucVNVOGtIRkdrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvSGFvVW9jVVF5YWVfXzEtY2hvS3NRIiwicGhvbmVJZCI6ImNmNTkxZTVhLWE4M2MtNGVmNS1iYTU0LTg2MWZhOTBmZjMzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2Vi93RUMydFozN1kvaitLWVNnYjVWb0lnSk09In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5tYmlTbFBSNk02alBKTXRzN3d3VXd4c2dDQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pXMG5OOEJFUCtaaXJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhQNHQ4THZGb1lBSU14RmNEUHpLaE1jV21GNE9sZEN0ZTFXVEw3SmhRSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhXTXI0R2RTSTJMMmVTM0ZjZXk0L2I3MkNSRkdVUE9pelBmY25kRWpLZUdERVNZY1dqSUE4OVJHS0tUYUhBSEZ0TzdnZ0VIZE9QZEtaNDVxS0R1ZEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxQzU4LzBRQjgyZ2twOUppQm5FejlObU1tZkY3MnpHWE8vNC93aUFlZ3ZNeUY2RmwyQW5CNUZpcEhOTUVxZ2x1SnlVVnlwa3ppazdHeVZZOVBZM3NDUT09In0sIm1lIjp7ImlkIjoiOTQ3NTA2MjUzNzU6MTZAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTA2MjUzNzU6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkQrTGZDN3hhR0FDRE1SWEF6OHlvVEhGcGhlRHBYUXJYdFZreSt5WVVCdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTkyODk2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPd2sifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY Sandaru Bandara',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '~ツ Sandaru' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
