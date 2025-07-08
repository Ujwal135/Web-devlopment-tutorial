console.log("Functions in java-script")

// 

function nice(name){
    console.log("hi i-am " +name);
    console.log( name + " is grate human grate human-kind ");
    console.log('hey ' + name + " your t-shirt is nice ")
    console.log("hey " + name + " are you learning java-script")
 }

nice("ujjwal")


//  Sum function 
function sum(a,b,c = 3){
    // console.log(a+ b)
      return a + b + c
}

// sum(3,5)

result = sum(3,4)
// console.log("The sum of given number is "+ result)

//  function re-usebility

result1 = sum(45,55)
result2 = sum(45,23,34)
result3 = sum(47)

console.log("the sum of the given number is ",result1)
console.log("the sum of the given number is ",result2)
console.log("the sum of the given number is ",result3)

// The arrow function 

const func1 = (x) =>{
    console.log("the web-site is devloped by ",x)
}

func1('Ujjwal')

    
