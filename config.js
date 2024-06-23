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
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0owcWlmbmVGa2dRcnpmZGFmdENEUjVFZGRjaW0rTUZQaUQ5dUQ4RE1HVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVk4T05WTEYrM3EwKzFjTStZRDJERkwrUU9JZnZwclU4YVRZZSs5REhVUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSFBkVDZQdkRscWNsMlNtcXBUcEFCMXZXL2N3eFRnNGo4YnEvT3RlRVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydFF4a01lYVJyTmthWmRSbGxkSkhzaHNhcHpLQ0JncThSLzIyTi9RbkhrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMT1c0UWpyc1hySG1KQzBFUlBUTkpNdjF4clJvVFJYaE90VVYyVVZ3Vkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik92d2tkOTQwenJOYVJiWHY0T05PUU5OTzJIbzlaazVuU3U2MldZOGlGWDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwOHZVQzJkeVEvUHBJRXB3V3RVVCtLLzJjWTcyWWZCMXhRQ1pGVWlkWFV6cHpFT1J5bU5jU3I4VE9UQ1dmKzExQW5sbzdjVUM5UlBLdFNkVGhEVk5Ddz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQxLCJhZHZTZWNyZXRLZXkiOiJiTHZGSWtxTXdLUktFVHdIRThaRDllUHFlNjIzNnRoWEZmMmJMcWp6MHBnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY1Mjk1MjU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFBQzg5RTZCMjBFMDA2N0ExMzcyNjIzNkEyQzQxOTA4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkxMjM1Mjd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY1Mjk1MjU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQzQjc3MUZBNEU2RTQzNzBCRTMwQUE1OUIxMDFBNDcxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkxMjM1Mjh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1PeWtDTzhvUkdlWFJSblRmc295bmciLCJwaG9uZUlkIjoiOWM2NjQzODQtNzViMC00MGMxLWE2NjMtNGEzOTQ4MjhhOTVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQxOGhHR2hRZjhGTlNwSDRPYUxtTG5aeU5oWT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTgzQjByUXNkcCtBMk41WnlQbEJJYjdCUE9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2EydVJvUXd2emVzd1lZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidlV5T0dwckZhS3c2WDhuK05rVk1UTnlsV1AvWHFYN0JtOWIvbHBQT3pXbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUF4dGI3dGIrbmpERzFQWFc5UGdrNVJEUktCbzM0ak92NkRmNFRkR2hKYWFpUWVPNy9JUzVDcVg4VVc2a1hFOU0wL2lrOWhLL2YvcWxXb1lvUGozQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBOZUwvUSt3Y29lMWM4K2lWV2pneE1hRHpPckJlS1lYTnErSUt1L3RXMVN3ZGFiOVpQUWJucDVud3pBcDc2T0FacTg3M25wUjZWTU1TNVUvS2VacUJBPT0ifSwibWUiOnsiaWQiOiI5NDc2NTI5NTI1OTo1MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIvLy4uLlNpdGh1d2EtTUQuLi4vL34ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjUyOTUyNTk6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjFNamhxYXhXaXNPbC9KL2paRlRFemNwVmovMTZsK3dadlcvNWFUenMxcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTEyMzUyNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNMGQifQ==",      //Put Your Session Id Here
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
 
