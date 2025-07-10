// creatation of array

let array = [2, 4, 5, 6, 7, 8];

// array type
console.log(typeof array);

// array get index
console.log(array[4]);

// array lenght

console.log(array.length);

// array mutability ,changing element from array

array[0] = 23;
console.log(array);

// Convert arrayy into string
let arrstr = [1, 4, 5, 7, 8];
console.log(arrstr.toString());

// array join
let arr1 = [32, 45, 76, 8, 6];
console.log(arr1.join(" - "));

// array pop :-- this will remove and reflect last element from array
array.pop();
console.log(array);

// array push :- this will add the element to last
array.push(100);
console.log(array);

// array shift :- This will remove first element from array
array.shift();
console.log(array);

// array unshift :- this will add element in 1st position
array.unshift(200);
console.log(array);


// array delete
delete array[3]
console.log(array)

// array concat
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1.concat(a2,a3))


