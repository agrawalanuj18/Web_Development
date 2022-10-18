const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3000;

app.get("/", (req, res) => {
  let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", option);
  res.render("list", { listTitle: day, newListItem: items });
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  if (req.body.list == "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
