const Emoji = require("node-emoji");
const isEmoji = require("isemoji")

module.exports = {
    switchEmoji: function (client,message,name) {
        emojiID = client.emojis.findKey(val => val.name === name)
        if (emojiID != undefined) {
            console.log('Custom emoji detected.')
            return [emojiID, true, name]
        } else if (Emoji.strip(name) != '' && isEmoji(name)) {
            console.log('Unicode emoji detected with extra text. Sanitizing input...')
            strippedName = Emoji.strip(name)
            name = name.replace(strippedName,'')
            if (Emoji.strip(name) != '') {
                name = '🤔'
            }
            return [0, false, name]
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