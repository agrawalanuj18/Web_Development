let marks = [98, 82, 73, 14];
console.log(marks)
let different_datatypes = [98, "Harry", false]
console.log(different_datatypes);
for(let i = 0; i<=(marks.length-1); i++){
  console.log(marks[i])
}
// Adding a new value to the array;
marks[4] = 55;
marks[5] = 99;
console.log(marks)
// Array is mutable;
marks[1] = 88;// array ki value change ho sakti h
console.log(marks)
