module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.1",//beta
  credits: "Mr Faris",
  description: "Against changing Bot's nickname"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `${info.name} - 𝗧ø𝗺𝗶 𝘽𝙊𝙏 𝗲𝗿 𝙉𝙄𝘾𝙆𝙉𝘼𝙈𝙀 𝗕 𝗳𝗼𝗿 𝗕𝗮𝗹 øØ𝗼 𝘾𝙃𝘼𝙉𝙂𝙀 𝗸𝗼𝗿𝗮 𝗽𝗮𝗿𝗯𝗮 𝗻𝗮_//- 😹🖐`}, threadID);
    }  
        }
