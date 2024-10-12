module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage(" 🫦-𝗛𝗲𝗹𝗹𝗼 𝗘𝘃𝗲𝗿𝘆𝗼𝗻𝗲🙋‍♂️ 𝐁𝐨𝐭 𝐢𝐬 𝐍𝐨𝐰 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝⛓️_//-", event.threadID, () => api.sendMessage({body:`🌺🦋🌺 
-𝗕𝗢𝗧 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩𝗜𝗥-☘️
<------------------------------>  
🫦-𝗕𝗢𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗙𝗨𝗟-🫦 

𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 𝗔𝗟𝗟𝗢𝗪 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣-🫦
<------------------------------>

-𝗨𝗦𝗘 𝗛𝗘𝗟𝗣 𝗧𝗢 𝗦𝗘𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗-🫦 
\n\nUse ${global.config.PREFIX}-𝗵𝗲𝗹𝗽 𝘁𝗼 𝘀𝗲𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀-🫦.\n\nexample :\n${global.config.PREFIX}𝘃𝗶𝗱𝗲𝗼 , +𝘃𝗶𝗱𝗲𝗼2 , +𝘃𝗶𝗱𝗲𝗼3 (video songs)\n${global.config.PREFIX}𝗺𝘂𝘀𝗶𝗰 +𝘀𝗼𝗻𝗴 +𝘀𝗶𝗻𝗴 (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}𝗶𝗻𝗳𝗼 
<<<<<------------------------------>>>>>
𝗔𝗡𝗗 𝗙𝗢𝗥 𝗔𝗡𝗬 𝗥𝗘𝗣𝗢𝗥𝗧 𝗢𝗥 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗕𝗢𝗧 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝐫-🫦 `, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/intro.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = " \n✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                 ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n    [   {name} ]\n\n༄✺࿐\n\n{threadName}\n\n 🥰🖤🌸𝗛𝗮𝗽𝗽𝘆🍀𝗘𝗻𝗷𝗼𝘆🍀—🌸🥀\n\n         🥀-𝗲𝗻𝗷𝗼𝘆 𝗸𝗼𝗿𝗲𝗻-🥀\n\n༄✺-𝗥 𝗮𝗽𝗻𝗶 𝗲𝗶 𝗴𝗿𝗼𝘂𝗽 𝗲𝗿 {soThanhVien} 𝗠𝗲𝗺𝗯𝗲𝗿 𝗘𝗻𝗷𝗼𝘆 𝗞𝗼𝗿𝗼 𝗷𝗮𝘄𝗿𝗮𝗺𝗸𝗶 𝗸𝗼𝗿𝗼_//- [ # ]࿐\n\n    ╔╦══•    •✠•❀•✠ •   •══╦╗\n     ♥  ═╩╝" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
      }
