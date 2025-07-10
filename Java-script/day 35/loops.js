arr = [2,43,54,5,6,7,8]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}


// arr.forEach(value,index,arr => {
//     console.log (value ,index,arr)
// });



// FOR OF LOOP 
for (const itrator of arr) {
    console.log(itrator)
}

let aar = [3,6,67,3,45,5,43]
let sqarr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sqarr.push(element**2)
}
console.log(sqarr)