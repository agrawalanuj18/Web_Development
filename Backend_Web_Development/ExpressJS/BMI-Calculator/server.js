const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function (request, response) {
    
    let weight = parseInt(request.body.weight);
    let height = parseInt(request.body.height)
 
    let result = weight/(height*height);

    response.send("Your BMI is " + result);
})

app.listen(3000, function () {
    console.log("Server 3000 is Running")
})