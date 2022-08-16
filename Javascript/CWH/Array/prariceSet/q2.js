// Question 2 Pratice Set
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 1; i > 0; i++) {
  let a = prompt("Enter the number");
  a = Number.parseInt(a);
  arr.push(a);
  if (a == 0) {
    break;
  }
}

console.log(arr);
