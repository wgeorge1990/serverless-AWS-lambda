const express = require("express")
const app = express()

//middleware
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => { 
    res.send("Hello and welcome to my basic express server!")
})

app.post('/hello', (req, res) => {
    let body = req.body
    body.message = "Hello " + body.name
    res.json(body)
})

app.listen(3000, () => {
    console.log("Server listening on port 3000!")
})
