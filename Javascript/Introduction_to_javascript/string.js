let name = "Harry";
console.log(name);
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
let friend = 'Aman';
// String '' isshe bhi declare kiya jaa sakta h 
console.log(friend);
console.log(friend.length);

// Template Literals
// it is use with ``
 let sentence = `${name} is a friend of ${friend}`;
// We can insert variable directly in template literal with the help of ${variable}. 
//This is known as String Interpolation
console.log(sentence);

// Escape Sequence character 
let fruit = "Bana\"na";
console.log(fruit);
console.log(fruit.length)
// it help to include " in the String. With the escape sequence character