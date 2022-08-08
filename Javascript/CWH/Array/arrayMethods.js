// Array Methods
let num = [1, 33, 55, 66, 77]
console.log(num);
let b = num.toString() // b is now String
console.log(b, typeof b);
let c = num.join(" - ")
console.log(c, typeof c)
num.pop();
console.log(num);// delete last element
console.log(num.pop());
console.log(num)
num.push(33); // insert new element by last
console.log(num)
let shift = num.shift() // delete first element
console.log(num);
let unshift = num.unshift(44)// add element at the begining 
console.log(num)