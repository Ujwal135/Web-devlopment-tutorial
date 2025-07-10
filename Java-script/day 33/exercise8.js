console.log("faulty-calculator ");


/*
This is faulty calculator its only performs 10% Right operations.
*/

let random = Math.random()
let num1 = parseInt(prompt("enter the 1st number"));
console.log(num1)
let num2 = parseInt(prompt("enter the 2nd number"));
console.log(num2)
let num3 = prompt("add symbol of opertion that you have to perform ,'+,-,*,/'");
console.log(num3)
console.log(random)


if(random > 0.1)

    {
    if(num3=="+"){
    console.log(num1+num2);
    }
    else if(num3 == "*"){
    console.log(num1*num2)
    }
    else if(num3 == "-"){
    console.log(num1-num2)
    }
    else if(num3 == "/"){
    console.log(num1/num2)
    }
    alert(`the result is ${num1}${num3} ${num2}`)
    }
  
   

else{
    if(num3=="+"){
    console.log(num1-num2);
    }
    else if(num3 == "*"){
    console.log(num1+num2)
    }
    else if(num3 == "-"){
    console.log(num1/num2)
    }
    else if(num3 == "/"){
    console.log(num1**num2)
    }
    alert(`the result is ${num1}${num3} ${num2}`)
    }

