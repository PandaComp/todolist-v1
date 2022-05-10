//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")
let ejs = require('ejs')

const app = express()

const today = new Date().getDay()
let day = '';
switch(today) {
    case 0 :
    day = "Sunday";
    break;
    case 1 :
    day = "Monday";
    break;
    case 2 :
    day = "Tuesday"
    break;
    case 3 :
    day = "Wednesday";
    break;
    case 4 :
    day = "Thursday";
    break;
    case 5 :
    day = "Friday"
    break;
    case 6 :
    day = "Saturday"
    break;
    default:
        console.log(`${today} means a pure yikes happened`)
}
console.log(day)
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('lists', {aWeekDay : "hello"})
})

app.listen(3000, ()=>{
    console.log("Yeah, server's running n shit")
})

// app.get("/", (req, res) => {
//     const today = new Date()
//     res.write("<h1>Candy Shoppe</h1>")
//    // res.sendFile(`${__dirname}/index.html`)
//  if ((today.getDay() === 6 || today.getDay() === 0) || (today.getHours() < 9 || today.getHours() >= 17)) {
//         res.write("<h2>Closed</h2>")
//     } else {
//         res.write("<h2>Open</h2>")
//         // res.sendFile(`${__dirname}/index.html`)
//     }
//      res.send() // let'send a file instead using sendFile()
// })