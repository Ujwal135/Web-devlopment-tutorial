// Async / await

// Async == this function will run  in background

// Await for async function ..

function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promiss resolve 395");
    }, 2000);
  });
}

console.log("Hi you will get data ");
console.log("Loading module")


async function main() {

let data = await getDate();  // Await 

console.log(data);
console.log("task 2");
console.log("data processing done.. ");

}

main()

/*

data.then((v) => {
  console.log("Prosses data ");
  console.log("task 2");
  console.log("data processing done ");
});

*/