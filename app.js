//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3000, ()=>{
    console.log("Yeah, server's running n shit")
})