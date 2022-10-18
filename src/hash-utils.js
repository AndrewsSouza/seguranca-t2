const { createHash } = require('crypto')

function hashFunction(stringBuffer = '', stringToAppend = '') {
    const stringToAppendBuffer = Buffer.from(stringToAppend, 'hex')
    const textToHash = stringBuffer.toString('binary').concat(stringToAppendBuffer.toString('binary'))
    const buffer = Buffer.from(textToHash, 'binary')

    return createHash('sha256', { encoding: 'binary' }).update(buffer).digest('hex')
}

function textToBinary(str = '') {
    let res = ''
    res = str.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0')
    }).join('')
    return res
}

module.exports = {
    hashFunction,
}