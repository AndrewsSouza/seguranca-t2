const { createHash } = require('crypto')

function hashFunction(stringBuffer = Buffer.from(''), stringToAppend = '') {
    const stringToAppendBuffer = Buffer.from(stringToAppend, 'hex')
    const textToHash = stringBuffer.toString('binary').concat(stringToAppendBuffer.toString('binary'))
    const buffer = Buffer.from(textToHash, 'binary')

    return createHash('sha256', { encoding: 'binary' }).update(buffer).digest('hex')
}

module.exports = {
    hashFunction,
}