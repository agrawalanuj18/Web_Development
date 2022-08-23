const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  // console.log(request.body)

  let num1 = parseInt(request.body.num1);
  let num2 = parseInt(request.body.num2);

  let result = num1 + num2;

  response.send("The Calculation of this Number is " + result);
});

app.listen(3000, function () {
  console.log("Server 3000 is running");
});
