const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94716159814'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94716159814"
global.devs = '94716159814';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUk0RDh1ekxQeFoxYnpzNStYS295V21NSmtONWlWM3N4U2lqcVBmMXRFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzExQk5BTjVab2FiU2d3eE5lMHY1azBnOFZRQnYwUHB5dVBpUi9PK1Uwaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQmZ1S1FTdnJNQWxiU05hRS9nMWluZ21zNm1LeEJZdmY3ZzdySWlKWGxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjaFhZOWxTMzhvcDVqcGNtb1VSMkRXSlR4NjRPSUVyc0d4WkhYZ0JVQXc4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPcEM2Ym8yWTBsSEVNNXFzcU9lMmRyMDNvOTF3ay9jT2NvbXZYZ2RxRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sYk1hZEZyUXFLZ3d4UDRxeTdKL1VJSDJqaE01OFNHdkIzWGFReG9Iazg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5N1ZpODhOZEZhZi9LT2lKTVJCbnVGSEdxVVFJc0Q2TjUwM2hrQStycVc1YjJhcUFMbjR4Z0tQRGVSeXBUcWdhUnE0SkVXbGxQTUN6MWdmd1BFbnpqQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1NCwiYWR2U2VjcmV0S2V5IjoibE1CZjdtL21uT3h1Z1VWS1pMMDZxcVcrbTFQZXpKMUtlVGdhSk5ROExMMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc2NTI5NTI1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQUQ5RjkwQjIwQTYyQTk2RkUzQkQyREE3Q0MxMjBCNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NTc2NTg3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5Mk43LXVuZVNPdV9FMzJmaGVmMUpBIiwicGhvbmVJZCI6IjkwNTNhMDcyLTI0YmQtNDU2My1iYTcxLWViMDgxYTkyNDcwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UkcrTjdrOVFsYUpmdkZqME9LcXphbzdEUHM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVpRElabitBVnRlL1MrazNiY1dCeGk4MDJhZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0thMnVSb1FodEQ2c3dZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZVeU9HcHJGYUt3Nlg4bitOa1ZNVE55bFdQL1hxWDdCbTliL2xwUE96V289IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRwZU02VkhrTDlZdDBsTmVjQks5V0NiYXd5WGFNZ1VLQk5mY0JPUmNTa1NKbGFWbEQ0N2hTWkg1c29aTjR1eTMxRjdQbVU3MDVsRTYvWjZDUFN4OERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuU2VrYno5cW1vY3hpMHNzZ01BaHRraGJKQmZ5QlFYM2lRK2pGVWZrb3Q3RytuODJWd0RBZTJxM01OV1lzWk5ENkd2VnFiWm5qbFhpZ1pOQU85bUdqdz09In0sIm1lIjp7ImlkIjoiOTQ3NjUyOTUyNTk6NTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLy8uLi5TaXRodXdhLU1ELi4uLy9+In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY1Mjk1MjU5OjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIxTWpocWF4V2lzT2wvSi9qWkZURXpjcFZqLzE2bCt3WnZXLzVhVHpzMXEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk1NzY1ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTBkIn0=",      //Put Your Session Id Here
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
 
