let character = prompt("Enter the character")
let count = character.length;
let remain = 220 - count;
console.log("You have written " + count + " character and you have " + remain + " character left")
alert(character.slice(0,220))