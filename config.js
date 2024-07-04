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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9160551001";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_23_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgwLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjljMUlSU29LVk1ZdXU0NnM2M1ZkMHRqOHVmV2t3WjMybmdKWEE0Z2ZleFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MDU1MTAwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjREN0JEQUZDN0VCODExOTI2Mjk3MTEzMkIwQjUzMTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTAyOTgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MDU1MTAwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzZDNzBGQjM1MzM1RDExOUU2QkVEOTNFNjI0MzRCM0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTAyOTgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInU3OThLVElHVHhlamZvdVE4dmwtMXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDg1MTI0ZmItN2RiYi00MDU1LThhODQtNDk0OGVmNzU0MTM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDIwOCxcbiAgICAgIDI1LFxuICAgICAgMjU1LFxuICAgICAgMTIxLFxuICAgICAgMTI5LFxuICAgICAgMjA2LFxuICAgICAgMjMxLFxuICAgICAgMTcyLFxuICAgICAgMTg0LFxuICAgICAgMTgsXG4gICAgICA3LFxuICAgICAgMTk1LFxuICAgICAgOTEsXG4gICAgICAyNDAsXG4gICAgICA5MyxcbiAgICAgIDEwOCxcbiAgICAgIDIxOSxcbiAgICAgIDE2MCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMjQzLFxuICAgICAgMTksXG4gICAgICAxNzUsXG4gICAgICAyMDcsXG4gICAgICAxMDgsXG4gICAgICAyMjQsXG4gICAgICAyOSxcbiAgICAgIDI2LFxuICAgICAgMTMsXG4gICAgICA4NixcbiAgICAgIDQ0LFxuICAgICAgODAsXG4gICAgICAyMTUsXG4gICAgICAxNTYsXG4gICAgICAyMjMsXG4gICAgICAxNTYsXG4gICAgICAxODQsXG4gICAgICAxMjEsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlpRU0VXMVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjA1NTEwMDE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNhdmlvdXJcIixcbiAgICBcImxpZFwiOiBcIjE3NTA0MTg0NTE1ODA3NzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xQYisrSUZFTDNnbXJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1dGTUVqMVY0VmVyVVE3YkdvY1VQZWVCdEk3SWE4TWs0MG5VaVJaOElYYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvejR6NXd5Z0JRR244NVBYVko2RTIvcFlYZHlvc3FWZzJwMDJWS0taNFNBSVZ3cGFhWlprbUYzTFR5czE2WEFzaisyaWF1M3hoMjJQU1hseXo0bzlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrekZmODQxZlhTdVpIY0Via0MzWkd3M1NPZVJqZklOZTdRc2gvZCtSR2Q5Y2RLNUNpSjJHOWwrQVZ6SGlldURZb1VZVkFZZHRzL1A1R2lvMUZILy9pdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYwNTUxMDAxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMDI5NzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQeW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB5by5qc29uIjogIntcImtleURhdGFcIjpcIkZhQUtzYkJ0eU51WmM2cjUyL0FGNk45MTNVV1BWMEZlRlVDWkY0Sk5FNXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0OTcyNTEwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDg3NDkwMDYyXCJ9Igp9"  // PUT your SESSION_ID 


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
