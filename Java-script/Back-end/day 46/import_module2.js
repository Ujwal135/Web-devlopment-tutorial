// How to import named exports

import {a,f,c,d} from './export_module1.js'
console.log("Named-type-exports",a,f,c,d)


// how to import default type exports

import obj from './export_module1.js'
console.log('Default-type-exports',obj)

// i can also import this by any diffrant name 
import ujjwal from './export_module1.js'
console.log("default Name export",ujjwal)

// using required
const g = require("./export_module1.js")
console.log(g) 