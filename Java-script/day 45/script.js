
//  IIFE function is javascript function that runs as soon as defined 
// IIFE => Immedieatly invoke function experession 

async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(334)
        }, 10);
    })
}

// IIFE 
(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()

//  Destructchruing in array

let x,y = [1,5]
console.log(x,y)

let z,s = [1,5,7]
console.log(z,s)    // 7 is removed not deconsole


let [a,b, ...rest] =[1,3,4,4,6,7,8]
console.log(a,b ,rest)

// destucturing of object 

let obj = {
    e:1,
    f:2,
    g:3
}
let {e,f} = obj
console.log(e,f)
// short hand array opener 
function sum(a,b,c){
    return a+b+c
}
let arr = [1,5,6]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))