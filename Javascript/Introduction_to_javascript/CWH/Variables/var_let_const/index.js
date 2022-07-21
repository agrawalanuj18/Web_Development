console.log("JavaScript tutorial 3: var, const, let")
// var a = 5
// var a = "Hello"
// var ko redeclare kar sakte h baar
//but Modern day javaScript me var ko use karna maana h or kam se kam use karna h 
// Iske jadey let keyword ko use karna h variabale declare karne ke liye
// var ko use karna hi nhi h, jitna ho sakhe
// maximum const ko use karna h 
let b = "change"
b = 4
const author = "Harry"
 //author = 5 It shows an error, because
// it is a constant keywords, which is not going to be change
let c = "hello"
{
    let c = "block scope"
  console.log(c)
}
  console.log(b)
console.log(author)
console.log(c)
