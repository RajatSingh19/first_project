var express = require("express");
var mongoose=require("mongoose");
var bodyParser = require('body-parser');
var app = express();
 var collegeRouter = 
   require('./routes/collegeRouter');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use('/api/colleges', collegeRouter);

mongoose.connect("mongodb://localhost/mynm",{
  useNewUrlParser: true})
  .then(function(){
     console.log("database connected");
  })
  .catch(function(err){
    console.log("couldnot connect to database")
  });



const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server running on port : " + PORT);
});