// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

// package.jsom - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init -y (everything default)

//package will be stored as dependency
//npm i lodash

//External Package -> First install
const _ = require('lodash')

const items = [1,[[2,3],4,5]]
const newItems = _.flattenDeep(items)
console.log(newItems)

// Nodemon automatically restarts app
// npm uninstall bootstrap
//  npm install -g nodemon 