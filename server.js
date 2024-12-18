const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

app.get('/',(req,res)=>{
  res.json({
    "posts": [
      { "id": 1, "title": "Hello World" },
      { "id": 2, "title": "JSON Server is awesome!" }
    ]
  })
})

app.listen(4000,()=>console.log("Server Started.."))