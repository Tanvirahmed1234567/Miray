const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["⬤──😽দুরত্ব মানুষ কে আলাদা করে না কিন্তু অবহেলা মানুষ কে আলাদা করে..!!🥰" , "-লয়াল হতে গিয়ে, একা হয়ে গেছি..._//-🐸🙂" , "-⎯⎯⎯⃝😽তু্ঁমি্ঁ কো্ঁন্ঁ গ্রা্ঁমে্ঁর্ঁ পুলা গো্ঁ লা্ঁগে্ঁ বু্ঁড়া্ঁ বু্ঁড়া্ঁ🫣⎯⃝🙄😹" , "𝄟≛⃝ ⎯͢⎯ শৃঁখেৃঁরৃঁ বেৃঁডিৃঁরেঁ ব্লৃঁকৃঁ কৃঁরৃঁলাৃঁমৃঁ🥲🥲✮⃝🥵💦🍒🤌" , "-𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱  দাও আইডি ঘুরে আসবো..!🐸🤣🫶🏻" , "😹⎯⃝😒 তো্ঁরে্ঁ লুচ্চা্ঁমি্ঁ সি্ঁখা্ঁই্ঁছে্ঁ কে্ঁডা্ঁ⎯͢😾⎯⃝🩷🍒" ,  "⎯͢⎯⃝🩷😽 টাঁংকিঁ মাঁরাঁরঁ লাঁগিঁ এঁকঁটাঁ তুঁমিঁ চাঁইঁ⎯͢⎯⃝🩷🐰🍒" , "──⃜⃜͢͢🍒͟͟͞͞๛⃝🫣😁এ্ঁড্ঁমি্ঁন্ঁ কা্ঁকু্ঁ মো্ঁরে্ঁ চি্ঁন্ঁছো্ঁ _//-😫😹" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🔶${name}🔶,  \n\n『\n   ${rand} 』\n\n❤️𝙲𝚛𝚎𝚍𝚒𝚝𝚜 :-𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩𝗜𝗥- `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
