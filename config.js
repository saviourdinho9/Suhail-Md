hiconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9061600660";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_36_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMixcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImEzMDMrTGxGaFd0UnZOcFJoOU0zZXJTZEN6d1UrVjlhMFpOQkRBMFIzU3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlU3cFBLblJtUzdTMFd3R1pROGRyRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODFiNDU5ODAtYjc0Zi00ZGU4LWFiYjEtMTg1ZmExMDZhZDE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDUwLFxuICAgICAgMTAsXG4gICAgICAyMjQsXG4gICAgICAxOTQsXG4gICAgICAxNjIsXG4gICAgICAxMzQsXG4gICAgICAxMzksXG4gICAgICAxMTMsXG4gICAgICAxNjYsXG4gICAgICAxMzksXG4gICAgICAxODEsXG4gICAgICAxNjIsXG4gICAgICAxNTcsXG4gICAgICAxOSxcbiAgICAgIDE2NyxcbiAgICAgIDI0MixcbiAgICAgIDc4LFxuICAgICAgMzEsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA1OSxcbiAgICAgIDEwNCxcbiAgICAgIDU4LFxuICAgICAgMTgyLFxuICAgICAgMTM1LFxuICAgICAgMTUyLFxuICAgICAgMTI3LFxuICAgICAgNzUsXG4gICAgICAxODgsXG4gICAgICAxNjcsXG4gICAgICA0NCxcbiAgICAgIDIyOCxcbiAgICAgIDc3LFxuICAgICAgODgsXG4gICAgICA1MyxcbiAgICAgIDEwNSxcbiAgICAgIDEzNixcbiAgICAgIDExNixcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlKUUpaU1dLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYxNjAwNjYwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDYzMDU1MDQxMzMzODo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEbW1yMEdFTFdNbnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWjJ2Ym04RElEdmRJQWJRTHZJVlQvbFZlUld2NjQ4b0wvd0lMc2g4d2QxZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1WlhLTE1hMEVtRU8ydEhTTlVmcTFrQW9BR005Nm9SaU1TNjNZYVJVWjdtRUNjeTVOcFFrNHJlMDBVM1FpR3l6eDVteEw0aTlId1RNdGRuT0tTeUpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvVURHNTIxanB6b0REVFBzVkFubnZUYzVFMCtyTW9LZDQ5TUNLYXZLbnRNUU9Kb0NreStsamtrbnQzdE9JVGxRekg3QklrdzA1SWZQeVY3NG1ORUVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYxNjAwNjYwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE1Nzc1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk4d1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTh3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwia3N2M1BxbDhCVlppQ3lGZlc2blN2a1kzOVBRaGRWcWkzOFptRGxQUlhyUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzM4OTc4MDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNTc3NTg2NjNcIn0iCn0="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
