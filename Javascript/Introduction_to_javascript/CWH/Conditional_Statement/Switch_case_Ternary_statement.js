// Switch-case statement

let a = prompt("Enter the value btw 1-3");
a = Number.parseInt(a);
switch(a){
  case 1: 
    console.log("The number is 1");
    break;
      case 2: 
    console.log("The number is 2");
    break;
      case 3: 
    console.log("The number is 3");
    break;
      default : 
    console.log("The number is out of range")
}

// Ternary Operator

console.log("You can", a<18? "not drive" : "drive");