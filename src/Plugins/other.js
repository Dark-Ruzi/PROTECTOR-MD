function hi() {
  console.log("Hello World!");
}
hi();
const os = require("os");
const fs = require("fs");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
const {
  formatSize,
  checkBandwidth,
  runtime
} = require("../../lib/myfunc");
const checkDiskSpace = require("check-disk-space").default;
const performance = require("perf_hooks").performance;
const botImage = fs.readFileSync("./Media/Images/kango5.jpg");
module.exports = [{
  command: ["botstatus", "statusbot"],
  operate: async ({
    Cypher: _0x30032b,
    m: _0x374d06,
    reply: _0x2e0211
  }) => {
    const _0x2ef71a = process.memoryUsage();
    const _0x3e72c5 = formatSize(_0x2ef71a.heapUsed) + " / " + formatSize(os.totalmem());
    const _0x1223af = formatSize(os.freemem());
    const _0x185a78 = await checkDiskSpace(process.cwd());
    const _0x436b7c = performance.now();
    await _0x2e0211("⏳ *Calculating ping...*");
    const _0x41d6c9 = performance.now();
    const _0x4a24ad = (_0x41d6c9 - _0x436b7c).toFixed(2) + " ms";
    const {
      download: _0x5c08e6,
      upload: _0x5a9571
    } = await checkBandwidth();
    const _0x18b9ab = runtime(process.uptime());
    const _0x342c8b = "\n\n      *🔹 BOT STATUS 🔹*\n\n🔸 *Ping:* " + _0x4a24ad + "\n\n🔹️ *Uptime:* " + _0x18b9ab + "\n\n🔸 *RAM Usage:* " + _0x3e72c5 + "\n\n🔹️ *Free RAM:* " + _0x1223af + "\n\n🔸 *Disk Usage:* " + formatSize(_0x185a78.size - _0x185a78.free) + " / " + formatSize(_0x185a78.size) + "\n\n🔹️ *Free Disk:* " + formatSize(_0x185a78.free) + "\n\n🔸 *Platform:* " + os.platform() + "\n\n🔹️ *NodeJS Version:* " + process.version + "\n\n🔸 *CPU Model:* " + os.cpus()[0].model + "\n\n🔹️ *Downloaded:* " + _0x5c08e6 + "\n\n🔸 *Uploaded:* " + _0x5a9571 + "\n\n";
    _0x30032b.sendMessage(_0x374d06.chat, {
      text: _0x342c8b.trim()
    }, {
      quoted: _0x374d06
    });
  }
}, {

  command: ["ping", "p"],
  operate: async ({
    m: _0x20d4d2,
    Cypher: _0x2f5590
  }) => {
    const _0x210da5 = performance.now();
    try {
      const _0x5aeaf4 = await _0x2f5590.sendMessage(_0x20d4d2.chat, {
        text: "📍Ping!",
        contextInfo: {
          quotedMessage: _0x20d4d2.message
        }
      });
      const _0x3ebbbb = performance.now();
      const _0x3f014e = (_0x3ebbbb - _0x210da5).toFixed(2) + " ms";
      await _0x2f5590.sendMessage(_0x20d4d2.chat, {
        text: "*⚡ PROTECTOR-MD :* " + _0x3f014e,
        edit: _0x5aeaf4.key,
        contextInfo: {
          quotedMessage: _0x20d4d2.message
        }
      });
    } catch (_0x16006d) {
      console.error("Error sending ping message:", _0x16006d);
      await _0x2f5590.sendMessage(_0x20d4d2.chat, {
        text: "An error occurred while trying to ping.",
        contextInfo: {
          quotedMessage: _0x20d4d2.message
        }
      });
    }
  }
}, {
  command: ["alive", "uptime"],
  operate: async ({ Cypher: David, m, reply }) => {
    const msgai = "*🌹Hi. I am 👑PROTECTOR, a friendly WhatsApp bot, created by ANGEL. Don't worry, I'm still Alive☺🚀*";
    const imagePath = 'https://files.catbox.moe/m494ut.jpg'; // Keep or update if you want to change this too

    // Random music from the 'Music' folder
    const musicFiles = [
      './Music/menu1.mp3',
      './Music/menu2.mp3',
      './Music/menu3.mp3',
      './Music/menu4.mp3'
    ];

    const randomMusic = musicFiles[Math.floor(Math.random() * musicFiles.length)];
    const botUptime = runtime(process.uptime());

    // React with emoji
    await David.sendMessage(m.chat, {
      react: {
        text: "🚫",
        key: m.key
      }
    });

    // Send image with caption + uptime
    await David.sendMessage(m.chat, {
      image: { url: imagePath },
      caption: `${msgai}\n\n*⏰ Uptime: 6 ᴍɪɴ*`
    }, { quoted: m });

    // Send random music
    await David.sendMessage(m.chat, {
      audio: { url: randomMusic },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
}, {
 
  command: ["repo", "repository"],
  operate: async ({
    m: _0x40a183,
    Cypher: _0xdd323,
    reply: _0x2e05a5
  }) => {
    try {
      // Fetch the repo owner's avatar image
      const { data: avatarBuffer } = await axios.get(repo.owner.avatar_url, {
        responseType: "arraybuffer"
      });

      const caption =
        `➢ *මෙම බොට් වරයා වෙනකෙකුට සෑදිය නොහැක.*
         ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴋ.ᴘᴀɢɴɢɴᴀꜱɪʀɪ ᴛʜᴇʀᴏ*`;

      await _0xdd323.sendMessage(_0x40a183.chat, {
        text: caption.trim(),
        contextInfo: {
          mentionedJid: [_0x40a183.sender],
          externalAdReply: {
            title: "ᴋᴘᴛ ᴀɪ - ʙᴏᴛ",
            mediaType: 1,
            thumbnail: Buffer.from(avatarBuffer),
            sourceUrl: repo.html_url
          }
        }
      }, {
        quoted: _0x40a183
      });
    } catch (err) {
      console.error("Repo fetch error:", err);
      _0x2e05a5("❌ *මෙම බොට් වරයාගේ රිපො එක private...*");
    }
  }
}, {
  command: ["time", "date"],
  operate: async ({
    m: _0x85e0e7,
    reply: _0xeb8670
  }) => {
    const _0x2e844b = moment().tz(global.timezones);
    const _0x2e5c1c = "\n\n      *🔹 CURRENT TIME 🔹*\n\n🗓️ *ᴅᴀʏ:* " + _0x2e844b.format("dddd") + "\n\n⌚ *ᴛɪᴍᴇ:* " + _0x2e844b.format("HH:mm:ss") + "\n\n📆 *ᴅᴀᴛᴇ:* " + _0x2e844b.format("LL") + "\n\n⏰ *ᴛɪᴍᴇᴢᴏɴᴇ:* " + global.timezones + "\n\n";
    _0xeb8670(_0x2e5c1c.trim());
  }
}];
