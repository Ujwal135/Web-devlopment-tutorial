
// factorial of any number 

let i = 1
let num = 9

let narray = []
do {
    narray.unshift(i)
    i =i+1
} while (i<=num);


console.log(narray)
let sump =(a,b)=>{
    return a*b
}
let xo = narray.reduce(sump)
console.log(xo)