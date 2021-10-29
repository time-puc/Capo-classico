const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'ok'})
} )

app.listen('4000')
