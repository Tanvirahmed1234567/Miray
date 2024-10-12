 const fs = require("fs");
module.exports.config = {
	name: "Tanvir",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Arun") || 
react.includes("arun")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\𝗻\𝗻✦𝗕Ø𝗦𝗦-𝗧𝗔𝗡𝗩𝗜𝗥✦\𝗻\𝗻★★᭄𝗙𝗕 𝐋𝐢𝐧𝐤 :\n\n✦🫦𝗵𝘁𝘁𝗽𝘀://𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/61550669852🫦\n -😾😻🌺😘😼😩😁😵😇-`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
