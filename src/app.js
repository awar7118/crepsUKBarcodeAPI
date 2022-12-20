const express = require('express')
const app = express()
const port = 3000
const { apiCaller } = require('./apiCaller')

app.get('/', (req, res) => {
    res.send('<h1>👋 from CrepsUk</h1>');

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
