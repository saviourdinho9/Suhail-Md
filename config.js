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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_06_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQ3T1cvNE12S2ZOWXRJc3V6aitFeFd5ZllLQzZJQzBZejdBMGFuWDBsS2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MDU1MTAwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkMwRTYxQzJCODYwODk4MkZDMTQyRjJBMDg1OTA1MTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTA1NjE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MDU1MTAwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTYyMTUxRTg2NDU3NDhCRERERDU5RTU4NkI1ODU4RjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTA1NjE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjEzWGd6ZzRWU2x5YnRIck91ZEZQVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzk1OTUzM2YtNWM4NC00MzFkLWE4MzktNTgwMGI5MzFlZWQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDE0NCxcbiAgICAgIDExNSxcbiAgICAgIDc2LFxuICAgICAgMjI4LFxuICAgICAgMjIwLFxuICAgICAgMjAwLFxuICAgICAgNTgsXG4gICAgICAyMjcsXG4gICAgICAxODQsXG4gICAgICA5MyxcbiAgICAgIDI0OCxcbiAgICAgIDM1LFxuICAgICAgMjQwLFxuICAgICAgMTEzLFxuICAgICAgMjgsXG4gICAgICA3MyxcbiAgICAgIDIwOCxcbiAgICAgIDE3MixcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAzOCxcbiAgICAgIDIzMyxcbiAgICAgIDE4OCxcbiAgICAgIDI0MyxcbiAgICAgIDIwNCxcbiAgICAgIDM5LFxuICAgICAgMjM4LFxuICAgICAgMzgsXG4gICAgICAyMTUsXG4gICAgICAyMzQsXG4gICAgICAyMDAsXG4gICAgICAyMjIsXG4gICAgICAxNDQsXG4gICAgICA4MixcbiAgICAgIDI0OSxcbiAgICAgIDExOSxcbiAgICAgIDQzLFxuICAgICAgMTA1LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMyRlFFV0NMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYwNTUxMDAxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYXZpb3VyXCIsXG4gICAgXCJsaWRcIjogXCIxNzUwNDE4NDUxNTgwNzc6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVGIrK0lGRUlmMW1yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNXRk1FajFWNFZlclVRN2JHb2NVUGVlQnRJN0lhOE1rNDBuVWlSWjhJWGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZmxnOWtVR0FlbHB4R2ZnUU02SWZNcE5iTUlHQTI5anFyL2prWlVzR2FiVE9vN1hlbENURnd2VWpqanovSXJzWkl2d3JjQmpjOTVnTmhlVGNpc21FQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1M4VFRGZUlGNytKSVVhbEpjSysrdytjbGFTVGg2bzYrL1lrUGlyRkdYWHdQZjgrVmliWGJKb1A5U3BybG9BOFJxMlFpUTUzcnBxNmhrdGJ2QjVuZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MDU1MTAwMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTA1NjExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHlzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQeXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2eEZReXhBS2JHN1E5QzBGd2RSWVVyK3EzMDVVUmFpSWUwSmFtalRONGo0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NDk3MjUxMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDEwNTYxNjExMFwifSIKfQ=="
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
