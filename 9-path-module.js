const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)

//To get last portion
const base = path.basename(filePath)
console.log(base)

//For absoulute resolved path
const absoulute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absoulute)