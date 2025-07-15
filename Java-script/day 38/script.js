console.log("ujjwal ")


let boxes1 = document.getElementsByClassName("box")
console.log(boxes1)

// style element using index [2] = 3rd no box will be red
boxes1[2].style.backgroundColor = 'red'

// what if i insert one box before
// property of previous element will applied on it becouse of its index 

// for that reson we use id 
// alredy our priorty is to change the backgroundcolor of 3rd no box
document.getElementById("redbox").style.backgroundColor = "red"


// Query Selector 
document.querySelector(".box").style.backgroundColor = "green"

// but this will only apply to 1st box only 

// for all box 
document.querySelectorAll(".box").style.backgroundColor = "green"
// This error is occur 
// Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
// becouse array does not support above query

document.querySelectorAll(".box").forEach(e => {    
    e.style.backgroundColor = "greenyellow"
})

// GET Element by tag 
document.getElementsByTagName("div") // will returns all div's in document

// GET Element by class name 
document.getElementsByClassName("box")