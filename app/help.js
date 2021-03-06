const common = require("./common.js");
const URL = process.env.NETLIFY_URL;
module.exports = async function handleHelp(msg) {
    const prefix = await common.getPrefix(msg.guild.id);
    var strCmd = msg.content.replace(/　/g, ' ');
    strCmd = strCmd.replace('  ', ' ');
    const args = strCmd.split(' ');
    args.shift();
    const helpValueWeak = prefix + "[モンスターの名前]";
    const helpValuePrefix = prefix + "prefix [newPrefix]";
    msg.channel.send('', {
        embed: {
            author: {
                name: 'MHRiseBOTの使い方'
            },
            description: `[モンスター一覧、編集や追加はこちら](${URL})`,
            color: 0x1bc2a5,
            fields: [{
                name: 'モンスターの弱点属性表示\r\n例：' + prefix + 'ディアブロス or 角竜',
                value: "```" + helpValueWeak + "```",
            },
            {
                name: 'Prefixの変更\r\n例：' + prefix + 'prefix !!!',
                value: "```" + helpValuePrefix + "```",
            }]
        }
    });
}