console.log("java script  DOM children parent & sibling nodes")

console.log(document.body.childNodes)

console.log(document.body.childNodes[5].childNodes)
// NodeList() [text, script, text, style, text, div.container, text]

// if we have to crate perticuler variable, so we can call it leter,x is for to store container class from html

let x = document.body.childNodes[5]

// after that i require perticuler item from that container 
x.firstElementChild  // this will return first box

x.lastElementChild // this will return last box 

// if we have change the colour of first element 
x.firstElementChild.style.color = "red"

// if we have to change the backgroud colour of element 
x.firstElementChild.style.backgroundColur = "green"

// if i require only container contained element 
document.body.firstElementChild.childNodes
//
// if i require all div childs only
document.body.firstElementChild.children
// if i have to select perticuler element from parent div 
document.body.firstElementChild.children[0]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[2] // so onn.. 

//nextElementSibling `
document.body.firstElementChild.children[1].nextElementSibling
//previousElementSibling 
document.body.firstElementChild.children[1].previousElementSibling

    

