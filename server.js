const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, "https://nodetestapp12.herokuapp.com", () => console.log(`Example app listening on port ${port}!`))