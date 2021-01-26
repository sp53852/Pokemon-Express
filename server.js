const express = require('express');
const app = express();


app.get('/somedata', (req, res) => {
    res.send("Hello");
    });
    

app.listen(3000, ()=>{
    console.log("I am listening")
});