const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Learn Web Development", "DSA"];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const port = 3000;

app.get("/", (req, res) => {
  var today = new Date();
  
  var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", option)

  res.render("list", { KindOfDay: day, newListItem: items });
});

app.get("/work", ()=>{
  
})

app.post("/", (req, res)=>{
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
