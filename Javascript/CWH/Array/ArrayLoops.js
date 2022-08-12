let num = [12,12,34,56,78];
// for(let i = 0; i<num.length; i++){
//   console.log(num[i])
// }
// for each
// num.forEach((element) => {
//   console.log(element*element)
// })

// Array from // When You have an HTML Collection
// console.log(typeof num) 

// Array ...from//used to create an object
let name = "Harry"; // make an array from this String
let arr = Array.from(name);
console.log(arr)

// for .... of // print the values of array
for(let i of num){
  console.log(i);
}

// for ... in // print the key
for(let i in num){
  console.log(i);
}