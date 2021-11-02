const express = require('express')
const app = express()
const port = 5000

// 몽구스모듈 가져오기

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kangji:kangji1234@boilerplate.xvg1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(()=> console.log('MongoDB Connected...'))
 .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))