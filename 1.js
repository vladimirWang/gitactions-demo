const fs = require('fs')

const file = fs.readFileSync('./data.txt')
console.log('file content', file.toString())