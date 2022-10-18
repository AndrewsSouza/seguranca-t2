const fs = require('fs');

function fileToByteBlockArray(file, blockSize = 1024) {
    const numberOfBlocks = Math.floor(file.byteLength / blockSize)
    
    let byteBlockArray = []

    for (let i = 0; i <= numberOfBlocks; i++) {
        byteBlockArray = byteBlockArray.concat(file.subarray(i * blockSize, (i + 1) * blockSize))
    }

    return byteBlockArray
}

function readFile(path) {
    return fs.readFileSync(path)
}

module.exports = {
    fileToByteBlockArray,
    readFile,
}