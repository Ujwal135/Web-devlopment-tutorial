document.title = " Inserting and Removing content using Java-script "

document.body.style.backgroundColor = "#f7f2bd";

// This will return text in div box1 
console.log(document.querySelector(".box").innerHTML)

// this will return all div in container 

console.log(document.querySelector(".container").innerHTML)  

// this will return tag name 
console.log(document.querySelector(".box").tagName)

// this methode will return all text contain form element 
console.log(document.querySelector(".box").textContent)

// this method will hide the element 
document.querySelector(".box1").hidden = true

// this method will chenge the inner HTML
document.querySelector(".box").innerHTML = "Hey this is Ujjwal "

// This method will check this attribute is present in element or not
document.querySelector(".box").hasAttribute("style")

// This method will return if any addribute is present 
document.querySelector(".box1").getAttribute("style")

// this method will set the attribute 
document.querySelector(".box1").setAttribute("style","display:inline") 

// this method will remove the attribute
document.querySelector(".box1").removeAttribute("style")

// data information ------ cheack HTML BOX 1 
document.querySelector(".box1").dataset

//Inserting element through java-script 

let div = document.createElement('div');
div.innerHTML = "I have been created by Ujjwal "
div.setAttribute("class","created ");
div.querySelector(".container").append(div)