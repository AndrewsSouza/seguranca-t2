const fileUtils = require('./src/utils/file-utils')
const calcHashZeroFromFile = require('./src/calc-hash-from-file')

const filePath = process.argv[2]

const fileData = fileUtils
    .readFile(filePath)

const h0 = calcHashZeroFromFile(fileData)

console.log("h0: ", h0)
