console.log("Java-script-Variable,Data-types and Objects")

// *************************************** This is var type variable ***********************************
var a = 5;
var b = 6;
var c = "ujjwal"


console.log(a+b)
console.log(typeof a ,typeof b,typeof c)

// ******************************************** const type variable ************************************

const a1 = 32;
console.log(a1,'this is constant')
// a1 = a1+1  // not allowed  (this type of variable is constant cannot change)


//***************************************/ let type variable  ****************************************

//  let type variable has block scope variable so we can use same variable in diffrant diffrant blocks.
// if we declare let globally it will take that value .

let a2 = 500; // globally decleare

{
    let a2 = 300;
    console.log(a2,"first block")
}

{
    let a2 = 600;
    console.log(a2,"second block")
}

console.log(a2,"globaly declared")

// ************************************* -Objects in Java-script-*************************************

let name1 = 'Happie-Ujjwal'; // string
let p = 3955; // number 
let q = true; // boolean
let r = null; // object
let s = undefined; // undefined 

console.log(name1,p,q,r,s)
console.log(typeof name1,typeof p,typeof q,typeof r,typeof s)

// ***** - Createing of an object as follow -

let details = {
    Name : 'ujjwal',
    'job-code' : 3459,
     salary : '2.5-million'
}

console.log(details)
details.is_handsome = true;
console.log(details)
details.NRI_status = null;
console.log(details)
