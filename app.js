const person = require('./modules-npm/module')
const http = require('http')

console.log(process.env.NODE_ENV)
require('dotenv').config()
console.log(process.env.NODE_ENV)