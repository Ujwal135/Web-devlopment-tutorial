console.log("Java-script conditionals: if,else if,else ladder")

// Arithmatic operators in Java-script

let x = 10 
let y = 5

console.log(x+y,'addition of x,y') 
console.log(x-y,'substraction  of x,y') 
console.log(x*y,'multiplication of x,y')  
console.log(x/y,'division of x,y') 
console.log(x**y,'Exponantial of x,y') 
console.log(x%y,' Modulas of x,y')

// Assignment Operator 
let e = 12;
let f = 13;

e += f
console.log(e, "12+13 = 25") // increment assignment operator
e -= f
console.log(e, "25-13 = 12") // decrement assignment operator
e *= f
console.log(e, "12*13 =156") // multiplication 
e /= f
console.log(e, "156/13 = 12") // divions 
e %= f
console.log(e, "12%13 = 12") //  modulas

// Comparison Operator 

let age = 18
console.log(age == 5, "true or false") // is equal to ?
console.log(age != 5, "true or false") // is not equal to ? 
console.log(5 === "5", "true or false") // is equal to ,and type 
console.log(5 !== "5","true or false") // not equal value or not equal type
console.log(age < 5, "true or false") // less then
console.log(age > 5, "true or false") // greter then
console.log(age <= 5 , "true or false") //less then equal to 
console.log(age >= 5,'true or false ') // greter then equal to 

// logical operator 
let salary = 12000
let salary2 = 12000
let salary3 = 13000
let salary4 = 13000

// logical AND
console.log(salary<salary3 && salary3>salary, "Both statement should be true")
// logical OR 
console.log(salary<salary3 || salary3<salary,"one of both is false then output will true ")
