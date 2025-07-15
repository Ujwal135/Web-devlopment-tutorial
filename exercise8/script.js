
// Creating Function for randomaly getting the color 
function getcolor() {
  const letter = "0123456789ABCDEF";
  let color = "#";

  for (let index = 0; index < 6; index++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

// this will return HEX color 
console.log(getcolor())

// for Boxes Random Background color 
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = getcolor();
});

// for Boxes Text color 
document.querySelectorAll(".col").forEach((e) => {
  e.style.color = getcolor();
});
