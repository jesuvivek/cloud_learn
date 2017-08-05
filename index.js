const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = process.env.PORT || 3000
app.use(express.static('public'));
app.engine('handlebars', exphbs.create().engine)
app.set('view engine', 'handlebars')
app.get('*', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log('Listening on port', port)
})
