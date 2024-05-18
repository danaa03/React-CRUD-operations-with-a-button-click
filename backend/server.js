const PORT = 5000
const express = require('express')
const bodyParser = require('body-parser')
const handlerRouter = require('./handler.js')
const cors = require('cors')

app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api', handlerRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})
