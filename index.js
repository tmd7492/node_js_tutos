const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res)=> {
    res.send("<h1>Hello World</h1>")
})

app.get("/about", (req, res)=> {
    res.send("About")
})

console.log(__dirname)

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})