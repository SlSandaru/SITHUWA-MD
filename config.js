const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94750625375'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sandarubandara001@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94750625375"
global.devs = '94750625375';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZFdkQrRG55MWxjdk1nMU81eHJVVFhOWklGNThKTVY3S3lDL0d4eGFsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkZZM1VGUzBoRjIrcVdvcmZ1ay9abnJJdkV2VXdIQ2MydGN4dGZpdkdBbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUFBUem9Gc2NjZ2lIWk1TYnZrdjRZRWpmR2RrbXhVTFZjNTNxMlo5dkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRFFZUVQxQk5Vdmp1OGVoaVVoeFFYd1BFdmhRM0ZLQkdhU04vNmRNaEZRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IWDVQUHpjSm0wc2RQZ0M2S1o3ZytMVW04TE0zREpiSVYyYklxcE9WMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imhod29DOWZoQTlvV2RLeEFOU3lkNHl0RVc4S2VPTUdaa2ZScDVPdmJZbjQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPWFlZbTJCRFlRMnFZam5jL1JNT3VpUGcwaEFBWXdUNkx6cTRaL3pPYzVEZlVSVWdaSFFydE9xSTVsL2xqTXRyYXIzOWhyZGsrcVJaOXN5WmdXNFJnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxNSwiYWR2U2VjcmV0S2V5IjoiTHlpOXI5UWZ1TnZFUGxiR09Xd3JMNkRNVmZvdmJzVVd6L1JPQWNWcWJJdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibWR5SWwwQUNSVnlfSWEwMmtwaU5OdyIsInBob25lSWQiOiJlNjBlNTU0OS01NWI0LTRkNGUtOTljMC00MTAyYjZmNGNkNTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUZXUURqMzYvUklicHV0ZExxRXlqc3JyN0Q0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvNFRPMUVLbEQ1aUd4VWxFOVdMWHh0MTBPQ2c9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbTBuTjhCRUxEbWpyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4UDR0OEx2Rm9ZQUlNeEZjRFB6S2hNY1dtRjRPbGRDdGUxV1RMN0poUUhBPSIsImFjY291bnRTaWduYXR1cmUiOiJNM0poZ3dlZXlFN2poWm9SOHVLVHRYTHBQaXR2aFRlTHdsUXprWFRJUjMzbHR2eUI2dE9BdTlmL0tnUG9vU0hrZkFidHFMYVVITjFXekw4K2M0OVFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU05TbmhqOVNNbWNGZVdvNFNxUER1b1l5L0R2cFNaTGlnd1I2N0pzdEg2Mlh1SXlpT0RTWTdJb1JmS2dTd044b2ZMc2lzdE8wSTFTRURPRlZwZXVqZ3c9PSJ9LCJtZSI6eyJpZCI6Ijk0NzUwNjI1Mzc1OjE5QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUwNjI1Mzc1OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZEK0xmQzd4YUdBQ0RNUlhBejh5b1RIRnBoZURwWFFyWHRWa3kreVlVQncifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwMDQyNzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3drIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY Sandaru Bandara',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '~ツ PROFESH RASH' : process.env.OWNER_NAME,  
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
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
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
 
