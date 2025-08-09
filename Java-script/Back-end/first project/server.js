var slugify = require('slugify')

let a =slugify('Ujjwal Dandge') // some-string
console.log(a)

// if you prefer something other than '-' as separator
let b = slugify('Ujjwal Dandge', '_')  // some_string
console.log(b)

