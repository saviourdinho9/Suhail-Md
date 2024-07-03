const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_39_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSXBxaHpqWi9CbVA1WXFWMytNZEpnbzV3LzZyWGRlbzFmejIwbUxLRGIwUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDYxNjAwNjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyREZFM0VCMDA1ODJEODdDMjM3RTdCQTA4MkYzNkRFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwNDYzODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1Z1dFlCV1ZTMzZramtOa3hLd2tTUVwiLFxuICBcInBob25lSWRcIjogXCJlZDY4YzdmOC0wYzk3LTQ0OWMtYmQwNy1lNTdmMDIwNWJhZmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTU2LFxuICAgICAgOTEsXG4gICAgICAxOTYsXG4gICAgICAzMSxcbiAgICAgIDEyMCxcbiAgICAgIDI1MixcbiAgICAgIDE4MixcbiAgICAgIDIwMSxcbiAgICAgIDIwNSxcbiAgICAgIDUyLFxuICAgICAgMjQ2LFxuICAgICAgOTcsXG4gICAgICAxMDQsXG4gICAgICAyMTksXG4gICAgICA0NSxcbiAgICAgIDIwMSxcbiAgICAgIDMsXG4gICAgICAxMzgsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgOTUsXG4gICAgICAyNDksXG4gICAgICAxNTksXG4gICAgICAxMjAsXG4gICAgICA0NCxcbiAgICAgIDE1NixcbiAgICAgIDIzNCxcbiAgICAgIDM2LFxuICAgICAgMTk1LFxuICAgICAgNTAsXG4gICAgICAyMjEsXG4gICAgICAxNzIsXG4gICAgICAxODQsXG4gICAgICAyMTUsXG4gICAgICAxODEsXG4gICAgICAxNTAsXG4gICAgICAxNjYsXG4gICAgICA4OSxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkpIM0JZWkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjE2MDA2NjA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwNjMwNTUwNDEzMzM4OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC9sbXIwR0VLU21sN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaMnZibThESUR2ZElBYlFMdklWVC9sVmVSV3Y2NDhvTC93SUxzaDh3ZDFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImM2ZGlTRWZRV0FMZUU0OGc4YnJaMzFkRGVISnN1aUhJUnFiY3VBSjdocUI5UmR0dFBKa3dSRTJldUI5QUlEZmptK3phNEtHQ2lnLzlvOHI3ZGdHWUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkYvV01RcUQxS2VxTFNHK0xlUzlRSmIvUHB0a0xrTVQwMVZTWU03azhPSmYwOTcrNTRwSzN5bnl5R1R5ZGcwM3c4SWI2R1JNQVZHNEVyU1p4K1JXSGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjE2MDA2NjA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDQ2Mzc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmFHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKYUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyMDhoakpSa0h6OVNEYUNvZjVlSXlEYStTSWowTkZOVUFzb2JPclJRODFnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3Mzg5NzgwNDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDA0NjE5OTk1OFwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
