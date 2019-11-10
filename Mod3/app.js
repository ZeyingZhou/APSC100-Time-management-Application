//Express set-up
var express = require("express")
var app = express()
app.use(express.static("public"))

//Mongoose set up
var mongoose = require("mongoose")

var sectionSchema = new mongoose.Schema({
      
  Monday:{
      index:[Array],
      code:[Array],
      type:[Array]
     },
  Tuesday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  },
  Wednesday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  },
  Thursday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  },
  Friday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  }
    
});


var sections = mongoose.model("sections", sectionSchema);
//mongoose.connect('mongodb://localhost/ExcelData', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://malcolm:queens@cluster0-swqqj.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

// ROUTES
app.get("/", function(req,res){
    res.render("landingPage.ejs");
    console.log("User made request to home")
});

app.get("/sectionSelection", function(req,res){
    res.render("sectionSelectionPage.ejs");
    console.log("User made request to section page")
});

app.get("/section01", function(req,res){
    
    
    var id = "5ca3e43c2d8f3e0ac4f1ef0a"
    sections.findById(id, function (err, Section00) {
        if(err){
            console.log("it didnt load")
            console.log(err)
        }
        else{
            res.render("index.ejs",{Section00:JSON.stringify(Section00)});
        }
    } );

    console.log("User made request to table page")
});

app.get("/section02", function(req,res){
    
    
    var id = "5ca3e674ddde470ae6c64422"
    sections.findById(id, function (err, Section00) {
        if(err){
            console.log("it didnt load")
            console.log(err)
        }
        else{
            res.render("index.ejs",{Section00:JSON.stringify(Section00)});
        }
    } );

    console.log("User made request to table page")
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED")
});