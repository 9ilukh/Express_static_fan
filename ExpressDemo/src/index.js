const express = require("express");
const app = express();
const path  = require('path');

//relative absolute path

//console.log(__dirname);
console.log(path.join(__dirname,"../public"));
//builtin middleware
//app.use(express.static(staticPath));

app.get("/" , (req,res) => {
  res.send("hello world from the likhitha")
});

app.listen(8000,() => {
  console.log("hello world from the thapa");
})