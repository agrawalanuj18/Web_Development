// Print the name with Greeting, pattern => Hello, Name!
let name = prompt("Enter the name");
let first = name.slice(0,1);
first = first.toUpperCase();
let remaining = name.slice(1,220);
remaining = remaining.toLowerCase();
alert("Hello, " + first + remaining +"!" );