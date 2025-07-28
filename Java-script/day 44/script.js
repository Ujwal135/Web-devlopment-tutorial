// let obj = {
//   a: 1,
//   b: "ujjwal",
// };
// console.log(obj);

// // prototype
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; // sets rabbit.[prototype] = animal


// creating class in js

class Animal {
  constructor(name) {
    this.name = name
    console.log("Object is created ");
  }

  eats() {
    console.log("Kha rha hu");
  }
  jumps() {
    console.log("kood rha hu");
  }
}

// let a = new Animal("bunny");
// console.log(a)

// extending animal class,  means you can use privious class attribute in newly created class
// Enharitance
 
class Lion extends Animal{
// if we have to add same contrusctor attribute.it will throw an error for that we have super()..
 constructor(name) {
    super(name)              // coment super to check error..
    this.name = name
    console.log("Object is created and he is lion  ");
 }
   eats() {
    console.log("Kha rha hu roar ");
   }
}

let a = new Animal("bunny");
console.log(a)

let l = new Lion("Sheera")
console.log(l)


// method overriding 
//  l.eats()  output is => kha rha hu roar
//  a.eats()  output is => kha rha hu 
