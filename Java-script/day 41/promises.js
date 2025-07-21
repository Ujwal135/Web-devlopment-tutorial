console.log("this is promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a)

  if (a < 0.5) {
    reject("No random number was not supporting you ");
  } else {
    setTimeout(() => {
      console.log("Yes promises done ");
      resolve("Ujjwal");
    }, 1000);
  }
});

// ANOTHER PROMIS 

let prom2 =new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a < 0.5 ){
        reject("No Random number was not supporting you 2 ");
    }
    else{
        setTimeout(() => {
            console.log("yes Promises done 2")
            resolve("Ujjwal 2")
        },1000);
    }
})


// promises all will get all promises status 
let pr3 = Promise.all([prom1,prom2])
pr3.then((a)=>{
    console.log(a)

}).catch(err =>{
    console.log(err)
})


// // promises all setaled .. you will get status of and and resones 
// let pr3 = Promise.allSettled([prom1,prom2])
// pr3.then((a)=>{
//     console.log(a)})

// .catch(err =>{
//     console.log(err)
// })
























prom1.then((a) => {
  console.log(a);
}).catch((err)=>{   // convert error into console log 
    console.log(err)
})
