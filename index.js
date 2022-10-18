const fileUtils = require('./src/utils/file-utils')
const calcHashZeroFromFile = require('./src/calc-hash-from-file')

const fileData = fileUtils
    .readFile('./test-files/FuncoesResumo - SHA1.mp4')
// .readFile('./test-files/FuncoesResumo - Hash Functions.mp4')

const h0 = calcHashZeroFromFile(fileData)

console.log("h0: ", h0)
