const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "views")))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res)=> {
    res.render('home', {title: 'Home Page'})
})
app.get('/header', (req, res)=> {
    res.render('Header', {title: 'Header Page'})
})


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})