const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
var response = {};
var stat = true;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});
console.log("hello");
// app.post("/",function(req,res) {
//   //alert(req.body.sport);
//   //if(req.body.sport !== null){
//   var team = req.body.sport;
//   var baseURL= "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=USA&s=";
//   var key = "&APPID=4013053";
//   var finalURL = baseURL + team + key;
//   request(finalURL,function(error,response,body){
//     var data = JSON.parse(body);
//                 response = {
//                     "date": new Date(),
//                     "params": {
//                         "Sport Type" : req.body.sport,
//                     },
//                     "response": data,
//                     "description": "last part"
//   };
//     res.send(response)
//
//
//
//   });
// //  }
//
// });

app.post("/",function(req,res) {
  if(req.body.city == "Hello"){
  var city = req.body.city;
  var baseURL= "http://api.openweathermap.org/data/2.5/weather?q=";
  var key = "&APPID=218f955661efb740eb8338b5409903c2";
  var finalURL = baseURL + city + key;
  request(finalURL,function(error,response,body){

    var data = JSON.parse(body);

                response = {
                    "date": new Date(),
                    "params": {
                        "city" : req.body.city,
                    },
                    "response": data.main,
                    "description": "returns the current weather of the city"
  };
    res.send(response)



  });

}

});

app.listen(3000,function(){
 console.log("Server is running on port 3000.");
});
