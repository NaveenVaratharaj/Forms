const express =  require("express")
const bodyParser = require('body-parser')
const ejs = require("ejs")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")

const lectures = []

app.get("/", (req,res) =>{
    res.render("forms", {lectures: lectures})
})

app.post("/", (req,res) =>{

    lectureDetails = {
        faculty_id : req.body.faculty_id,
        dept: req.body.dept,
        lecture: req.body.lecture,
        subject: req.body.subject,
        venue: req.body.venue,
        date: req.body.date,
        duration: req.body.duration
    }
    lectures.push(lectureDetails)
})

app.listen(8000, (req,res) =>{
    console.log("App started at the port 8000")
})