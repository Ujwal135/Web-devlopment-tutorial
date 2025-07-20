let container = document.getElementsByClassName(".container");
let parent = document.getElementsByClassName(".parent");
let child = document.getElementsByClassName(".child");

//Event-Bubbling

// Hear you notice when you cliked to the child all alerts was also active  ...> for that we have event propagation

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()  // Hear you will see after click   only 1 alret will come 
  alert("Hii IM #Child ");
});

document.querySelector(".parent").addEventListener("click", (e) => {
  alert("Hii IM #Parent ");
});

document.querySelector(".container").addEventListener("click", (e) => {
  alert("Hii IM #Container ");
});


// ******************************** Set Interval ****************************

// this is function for random color 

function getcolor() {
  const letter = "0123456789ABCDEF";
  let color = "#";

  for (let index = 0; index < 6; index++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}


// set interval 
let a  = setInterval(() => {
    document.querySelector(".child").style.background = getcolor()
},1000);
console.log(a)  
 // how to stop it => first of all you'll get return value 1 .. now type clearInterval(1) this will stop  

// set timeOut 
 let b  = setTimeout(() => {
    document.querySelector(".child").style.background = getcolor()
},5000);
console.log(b)  
 // how to stop it => first of all you'll get return value 1 .. now type clearTimeout(1) this will stop 
