const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94740273578'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94740273578"
global.devs = '94740273578';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUltT2JnVGlXN0NWRmJxc3pDM3BIY1h2c2QvQTV4Z3lSWWZ0VWs2UUQxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFhwbUZpcW9sWXpLZFoxbU5LNzZqemJTTmhJZ2VvY3A5NTVScGlRdmt3ND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmZQQnNzOHV1NCtiUFF2RFBoQmE1c3ZUSGVia0NHRWY2ZDc5ZGxudEhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOeWkyVmYvRi9hL2tnNDM1bnFjRFllTG4wM1U0cFRMRGtBUlFNTzZtQndvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGT3BVbkkrT1MzZ2VpZlAzT2VvMzJDdTk4ZlZnSU8rTk8rMmxvc1dXV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii91YUlHbFRiaDBaUWJPNEZRVUVFcjkrUklsTEErNXYySG9MUG5POVh2ajA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZkdmZytrMUVHK01GNmhuZm9wZDl6K1F1WTRFRVVaNTFwWUhKb0VSZU5rTmNYRFFkSkVldzJSNjB6c2FWR3l5TktlUkpOYzFqSENqOWRHSlZGUzhodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2NCwiYWR2U2VjcmV0S2V5IjoiQkVVcmk3QUt4QUNXTFYyVXpTSnQxcUdnaTc4RlgxeHZsNEUxcjNZMVdxYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWWRmSG95cExRakdJZEdsQW16VUVNdyIsInBob25lSWQiOiJjOWIzMzBiZS1lMGJmLTRjNTItODVmYy05ZjMwMWMxZWY2ZjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2dEM3oxOGFxOEtvNnZWd1dZTG5ON29PRTQ4PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBcVU2dWVsY0Y2RlVXb1hhS2lZZE5KKzNQS2M9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMnY5K2tCRUtQdWlMSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3eDloTFZBZHpiSDRwaDJXa3RXaEFNMW9NWkM3UUhuSU9hRUZlSlpUK0h3PSIsImFjY291bnRTaWduYXR1cmUiOiIvdDNvT280dnQvQSsyN1NSbkRiWDgwaUlpdEVhQ0ZzWDgzZW5JYTNlUSt3ZDg2akRhdm9oWkgxdFdaRTVMTWpzSEo4d21KcXMyQkUvYkNKY0Q4Rm5EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZzlVUEN4Si9jeTlFUm5VN2l4SVc0aXJFNFdzczBzbERvNzd1a1ppcXpVNUIybmFsd2g1bnl4UlB4YUJuNXJTRlovZ25uSWI3N1Y1UFFYdTByUWNLaHc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzQwMjczNTc4OjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThIIg8J2ZsPCdmbvwnZqY8J2al/Cdmo4g8J2anPCdmorwnZqT8J2aiuC/kCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDI3MzU3ODo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTWZZUzFRSGMyeCtLWWRscExWb1FETmFER1F1MEI1eURtaEJYaVdVL2g4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NjE1NTI1fQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '~ツ 𝙰𝙻𝚘𝚗𝚎 𝚜𝚊𝚓𝚊' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
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
 
