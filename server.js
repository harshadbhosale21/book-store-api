const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello There")
})

const port = 3000;

app.listen(() => {
    console.log(`App ruuning on port ${port}`)
})