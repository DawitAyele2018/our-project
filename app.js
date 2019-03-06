const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
var response = {};

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

// app.post("/",function(req,res) {
//
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
//
// });

app.post("/",function(req,res) {
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
                    "description": "returns an object that coming from Canadeian football league"
  };
    res.send(response)



  });

});

app.listen(3000,function(){
 console.log("Server is running on port 3000.");
});
