// generate random number between 1 - 100
let num = Math.random();
num = Math.floor(num * 100 + 1);
let i;
for (i = 1; i <= 100; i++) {
  let userNum = prompt("Guess the Number");
  if (userNum > num) {
    console.log("Your number is large");
  } else if (userNum < num) {
    console.log("Your number is small");
  } else {
    console.log("Your number is correct");
    break;
  }
}

let Score = 100 - i;
console.log("Guess Number is " + num);
console.log("Your Score is " + Score);
