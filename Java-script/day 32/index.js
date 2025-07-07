console.log("Loops in java-script");

// For loop

let a = 15;
for (let i = 0; i < a; i++) {
  console.log(i + 1);
}
console.log("*******end********")
/****************************************************************************************************************************** */
// For-in loop
let details = {
  nAme: "ujjwal",
  domain: "devloper",
  sapid: "24343",
};

for (const key in details) {
  const element = details[key];
  console.log(key);
}

console.log("*******end********")
//****************************************************************************************************************************** */
// For -of loop

for (const b of "This-is-Ujwal") {
    console.log(b)
}

console.log("*******end********")
/****************************************************************************************************************************** */
// While loop

let i = 0;
while (i<10) {
    console.log(i)
    i++;
}

console.log("*******end********")
/****************************************************************************************************************************** */
// While loop
let w = 0
do {
    console.log(w)
    w++
} while (w<11);

console.log("*******end********")