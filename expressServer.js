const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', function(req,res){
    res.send('test is working');
})

app.get('/test', function(req,res){
    res.send('test is working');
})

app.post('/test', function(req,res){
    res.send('post is working');
})



app.listen(PORT, function(){
    console.log(`Listening to port: ${PORT}`)
})