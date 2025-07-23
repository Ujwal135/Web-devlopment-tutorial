

// Error Throwing 
let a  = prompt("Enter first  number")
let b  = prompt("Enter second number ") 

sum = parseInt(a) + parseInt(b) 

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry this is not allowed Ujjwal")
}
console.log("the sum of both number",sum)


// Error handling 

try {
    console.log("the sum of both number",sum*x)           // hear we did't define x so this will if not then jump to catch

} catch (error) {
    console.log("please check the error mr Ujjwal") 
}

// Error handling and finally statement

function main(){

try {
    console.log("the sum of the both number",sum*x)
    return true
} catch (error) {
    console.log("please check the error mr Ujjwal") 
    return false
}
finally{
    console.log("fills has been closed and db connection is also closed ")
}
}

    let c = main()