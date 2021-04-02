// const {readFileSync} = require('fs')
// Same as above
// const fs = require('fs')
// fs.read

const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)
// above returns : It's the first text file! It's the first text file!

//Below : Creates a new file or overwrites if already present.
// writeFileSync(
//     './content/result-sync.txt',`Here is the result : ${first}, ${second}`
// )

// If flag is set to 'a' it appends

writeFileSync(
    './content/result-sync.txt',`Here is the result : ${first}, ${second}`,
    {flag : 'a'}
)

console.log('done with this task')
console.log('starting the next one')

