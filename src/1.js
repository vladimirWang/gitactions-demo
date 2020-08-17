const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.resolve(__dirname, './data.txt'))
console.log('file content', file.toString())