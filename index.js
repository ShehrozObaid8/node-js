const express = require('express')
const db = require('./Config/db')
const app = express()
var cors = require('cors')

app.use(cors())

app.listen(process.env.port || 3008, function () {
    console.log('listening to 3000')
})

db.connection.once('open', () => {
    console.log('db connected successfully')
}).on('error', (e) => {
    console.log('error:', e)
})

app.use(express.json())

app.use('/', require('./routes/index'))
