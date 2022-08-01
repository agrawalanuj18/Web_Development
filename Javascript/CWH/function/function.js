// function
function Avg(x, y) {
  let result = (x + y) / 2;
  return result;
}

// another way to made function
const hello = () => {
  console.log("Hello Here I am Calculating Function");
};
// sum functon made
const sum = (x, y) => {
  let result = x + y;
  console.log(result);
};

let a = prompt("Enter the value of a");
a = Number.parseInt(a);
let b = prompt("Enter the value of b");
b = Number.parseInt(b);
let c = prompt("Enter the value of c");
c = Number.parseInt(c);

console.log("The Average of a and b is " + Avg(a, b));
console.log("the Avgerage of b and c is " + Avg(b, c));
hello();
sum(a, b);
sum(b, c);