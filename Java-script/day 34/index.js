// Strings in java-script

let a_name = "ujjwal"


// to print indiviual characheter of string
console.log(a_name[0])
console.log(a_name[1])
console.log(a_name[2])
console.log(a_name[3])
console.log(a_name[4])
console.log(a_name[5])


// print the lenght of (string) charachter

let a = 'UjjwalDandge'
console.log(a.length)


// String concatination 

let b = "ujjwal"
let c = "prajwal"

console.log("His name is "+ b + " and His friend name is " + c)


// String litrals ---> using backtics. 

console.log(`His name is ${ b } and His friend name is ${ c}`)  //------> string interplolation     


// string conversion 

    // lower to upper
let d = "ujjwal dangde"

console.log(d.toUpperCase())

    // upper to lower case 
var e = d.toUpperCase()

console.log(e.toLowerCase())




// String slicing in java-script

let f = "ujjwal"
console.log(f.slice(1,6))

// String replace property

let i = "ujjwal"
console.log(i.replace("uj","pra")) // only first occurance will replace

// string concat
let j = 'ujjwal '
console.log(j.concat('prajwal ','aniruddha'))  // using , we can add more in string 