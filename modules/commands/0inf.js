module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Arun Kumar", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/502V7BFq/Messenger-creation-191-C6998-AB3-D-4-FB2-B26-F-A6-DFCEFF386-D.jpg", "https://i.imgur.com/gjcmj4g.jpeg", "https://i.imgur.com/C4Ac6Hy.jpeg", "https://i.imgur.com/C4Ac6Hy.jpeg"];
var callback = () => api.sendMessage({body:`●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n\n🫦-𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽-🫦 


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ -♦𝐓𝐀𝐍𝐕𝐈𝐑♦- ☜︎︎︎✰ \n\n
-♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/61550669852479 💞🕊️
  \n 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 @𝘁𝗮𝗻𝘃𝗶_𝗿___112🫦 \n\n  ==== -𝗘𝗻𝗷𝗼𝘆 𝘁𝗵𝗶𝘀 𝗧𝗮𝗻𝘃𝗶𝗿 𝗕𝗢𝗧- === 
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳-𝗨𝗣𝗧𝗜𝗠𝗘-🥳

🌪️-𝗧𝗼𝗱𝗮𝘆 𝗶𝘀-🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡-𝗕𝗼𝘁 𝗶𝘀 𝗿𝘂𝗻𝗻𝗶𝗻𝗴-⚡ ${hours}:${minutes}:${seconds}.

✅-𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗠𝘆 𝗕𝗼𝘁-❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };
