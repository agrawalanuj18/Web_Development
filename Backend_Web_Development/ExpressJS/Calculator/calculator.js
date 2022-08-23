const { response } = require("express");
const express = require("express")
const app = express();

app.get("/", function(request, response){
    response.send("Hello World!")
})

app.listen(3000, function(){
    console.log("Server 3000 is running")
})