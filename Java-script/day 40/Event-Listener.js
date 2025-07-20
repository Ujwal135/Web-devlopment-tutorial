//  button using getelementid
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
// let button4 = document.getElementById(".box")

button1.addEventListener("click",()=>{
    alert("thanks for cliking ")
})
// let button2 = document.getElementById("btn2")

button2.addEventListener("click",()=> {
    document.querySelector(".one").innerHTML = "hellow this is ujjwal"
})

//   Mouse events - Double Clicking 
button3.addEventListener("dblclick",()=>{
    alert("Thanks for double Clicking ")
})

// keyboard event 
document.addEventListener("keydown",(e)=>{
    console.log(e)
    // console.log(e.key,e.keyCode) ##### can print key code and key
})
