// create Express App
const express = require('express');
const app = express();
// const path = require('path');
var PORT = process.env.PORT || 5000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// create endpoint / to test server 
app.get('/', (req, res) => res.send('API Running'))

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});