//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", (req, res) => {
    const today = new Date()
 if ((today.getDay() === 6 || today.getDay() === 0) || (today.getHours() < 9 || today.getHours() >= 17)) {
        res.send("Closed")
    } else {
        res.send("Open")
    }
})

app.listen(3000, ()=>{
    console.log("Yeah, server's running n shit")
})