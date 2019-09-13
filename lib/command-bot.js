const isEmoji = require("isemoji");

module.exports = {
    switchEmoji: function (client,message,name) {
        emojiID = client.emojis.findKey(val => val.name === name)

        console.log(name)
        if (emojiID != undefined) {
            console.log('Custom emoji detected.')
            return [emojiID, true, name]
        } else if (isEmoji(name)) {
            console.log('Unicode emoji detected.')
            return [0, false, name]
        } else {
            console.log('Invalid entry. Assigning default reaction...')
            name = '🤔'
            return [0, false, name]
        }
    }
}