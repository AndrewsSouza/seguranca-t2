const hashUtils = require('./utils/hash-utils')
const fileUtils = require('./utils/file-utils')
const Block = require('./models/block')

function calcHashZeroFromFile(fileData) {
    const blocks = fileUtils.fileToByteBlockArray(fileData)
        .map(block => new Block(block, ''))

    let h0

    for (let i = blocks.length - 1; i >= 0; i--) {
        if (i == 0) {
            h0 = hashUtils.hashFunction(blocks[i].block, blocks[i].appendedHash)
        } else {
            const hash = hashUtils.hashFunction(blocks[i].block, blocks[i].appendedHash)

            blocks[i - 1].appendedHash = hash
        }
    }

    return h0
}

module.exports = calcHashZeroFromFile