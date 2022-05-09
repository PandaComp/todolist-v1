//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express()


app.get("/", (req, res) => {
    const today = new Date()
    res.write("<h1>Candy Shoppe</h1>")
   // res.sendFile(`${__dirname}/index.html`)
 if ((today.getDay() === 6 || today.getDay() === 0) || (today.getHours() < 9 || today.getHours() >= 17)) {
        res.write("<h2>Closed</h2>")
    } else {
        res.write("<h2>Open</h2>")
        // res.sendFile(`${__dirname}/index.html`)
    }
     res.send() // let'send a file instead using sendFile()
})

app.listen(3000, ()=>{
    console.log("Yeah, server's running n shit")
})