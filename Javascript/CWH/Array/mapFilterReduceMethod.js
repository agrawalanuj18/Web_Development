let arr = [44, 55, 66,664,312];
console.log(arr)
// Array Map Method
arr.map((value)=>{
  console.log(value)
})
// map create a new array
let newArr = arr.map((value, index ,array)=>{
  console.log(value, index ,array)
  return value + 1  
})
console.log(newArr)

// Array replace method
let b = arr.filter((a)=>{
  return a<100
})
console.log(b)
// reduce array method
let arr2 = [1,3,5,7,9,1]
let c = arr2.reduce((h1, h2)=>{
  return h1 + h2;
})
console.log(c)