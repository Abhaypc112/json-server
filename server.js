const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

app.get('/',(req,res)=>{
  fs.readFile(path.join(__dirname,'db.json'),(err,data)=>{
    if(err) throw Error
    const jsonString = data.toString('utf-8'); // Convert Buffer to string
    const jsonObject = JSON.parse(jsonString);
    res.json(jsonObject)
  })
  })

app.listen(4000,()=>console.log("Server Started.."))