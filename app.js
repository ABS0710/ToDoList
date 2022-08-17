const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');

const app = express();

var items = ["eat food","buy","drink"];
var item = "";
let workItems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  day = date.getDay();
  res.render("list", {
    listTitle: day,
    newListItem : items

  });
})

app.get("/work", function(req,res){
  res.render("list", {
    listTitle: "Work List",
    newListItem : workItems
  })
})

app.get("/about",function(req,res){
  res.render("about");
})

app.post("/", function(req,res){
  console.log(req.body);
  item = req.body.newItem;
  if(req.body.list==="Work"){
    if(item!==""){
    workItems.push(item);
    res.redirect("/work");
  }
}else{
  if(item!==""){
  items.push(item);
  res.redirect("/");
}
}

})

app.listen(3000, function() {
  console.log("3000 running");
})
