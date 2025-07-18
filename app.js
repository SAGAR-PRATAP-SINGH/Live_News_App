const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/newspedia"));

app.post("/", function(req, res){
    const city = req.body.city;
    const apiKey = "f50f9c9a18700e8bb111fcb941ee31d1";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units="+unit;
    
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const desc = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            const city = weatherData.name;
            const iconURL = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png";
            
            res.write("<h3>The weather is currently "+desc+"</h3>");
            res.write("<h1>The temperature in "+city+" is "+temp+" degree celcius</h1>");
            res.write("<img src="+iconURL+">");
            res.send();
        });
    });

    // res.redirect("/end");
});

// app.get("/end"), function(req, res){
    // res.send("Good");
    // };
    
    app.get("/", function(req, res){
    res.sendFile(__dirname + "/newspedia/home.html");
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});