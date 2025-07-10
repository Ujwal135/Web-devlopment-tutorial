

let first, second, third;
let rand = Math.random();
// for first world
if (rand < 0.33) {
  first = "Crazy";
} else if (rand < 0.66 && rand > 0.33) {
  first = "Amazing";
} else {
  first = "fire";
}
// for second world
if (rand < 0.33) {
  second = "Engine";
} else if (rand < 0.66 && rand > 0.33) {
  first = "food";
} else {
  first = "garmets";
}
// for third world
if (rand > 0.66) {
  third = "bros";
} else if (rand < 0.66 && rand > 0.33) {
  third = "limited";
} else {
  third = "hub";
}
console.log (rand)
console.log(`sutable business name is ${first} ${second} ${third}`)