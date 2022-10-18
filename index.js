const fileUtils = require('./src/file-utils')
const hashUtils = require('./src/hash-utils')
const Block = require('./src/block')

const fileData = fileUtils.readFile('./test-files/FuncoesResumo - SHA1.mp4')
// const fileData = fileUtils.readFile('./test-files/FuncoesResumo - Hash Functions.mp4')

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

console.log("h0: ", h0)
