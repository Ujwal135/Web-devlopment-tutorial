/// MAP FUNCTION

// using long process
let aar = [3, 6, 67, 3, 45, 5, 43];
let sqarr = [];

for (let index = 0; index < aar.length; index++) {
  const element = aar[index];
  sqarr.push(element ** 2);
}
console.log(sqarr);

// using map method

let newsqrr = aar.map((e) => {
  return e ** 2;
});

console.log(newsqrr);

/// Filter function :- we have filter the elements who is greater then 7



let arr = [2, 43, 54, 5, 6, 7, 8];

const greaterThenSevan = (e) =>{
    if (e>7){
        return true
    }
    return false
}   
console.log("Greater Then 7",arr.filter(greaterThenSevan))

const smallerTheneight = (e) =>{
    if(e<8){
        return true
    }
    return false
}
console.log("Smaller then 8",arr.filter(smallerTheneight))

///Reduce Function

let newarr = [1,2,3,4,5,6,7]

const red  = (a,b)=>{
    return a*b
}
console.log(newarr.reduce(red))

/// Convert any string to array

console.log(Array.from("ujjwalDandge"))  
