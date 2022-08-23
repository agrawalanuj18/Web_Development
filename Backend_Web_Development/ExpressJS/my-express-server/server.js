const { response } = require('express');
const express = require('express')
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello, This is Express JS Server!</h1>")
})

app.get("/contact", function(request,response){
    response.send("<h1>Contact me at: agrawalanuj8622@gmail.com</h1>")
})

app.get("/about", function(request, response){
    response.send("<h1>I am Anuj Agrawal!</h1>")
})

app.get("/hobbies", function(request, response){
    response.send("<h1>I am Web Developer!</h1>")
})


app.listen(3000, function(){
    console.log("Server 3000 is running")
});