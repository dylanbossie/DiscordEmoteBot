const isEmoji = require("isemoji");

module.exports = {
    switchEmoji: function (client,message,name) {
        emojiID = client.emojis.findKey(val => val.name === name)

        console.log(name)
        if (emojiID != undefined) {
            return [emojiID, true, name]
        } else if (isEmoji(name)) {
            return [0, false, name]
        } else {
            name = '🤔'
            return [0, false, name]
        }
    }
}