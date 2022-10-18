module.exports = class Block {
    block
    appendedHash

    constructor(block, appendedHash = '') {
        this.block = block
        this.appendedHash = appendedHash
    }
}