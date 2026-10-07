const express = require('express')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())
app.use(csrf({ cookie: true }))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

app.use(express.static(`${__dirname}/`))
