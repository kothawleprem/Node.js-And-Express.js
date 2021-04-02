
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const secret = 'SUPER SECRET'
// const mahesh = 'mahesh'
// const shubham = 'shubham'

// const sayHi = (name) =>{
//     console.log(`Hello there ${name}`);
// }

// sayHi('Prem')
// sayHi(names.mahesh)
// sayHi(names.shubham)
//----------------------------------

const names = require('./4-names')
const sayHi = require('./5-utils')

require('./7-mind-grenade')

// const data = require('./6-alternative-flavor')
// console.log(data)

// sayHi('Prem')
// sayHi(names.mahesh)
// sayHi(names.shubham)