const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = 80;

//app has the functionality of an express app 
//app creates a get endpoint which receives 2 param
//1. string indicates where to expose the endpoint ('/', the root of the project)
//2. callback function which is in the Arrow Function format of JS
// () opening pair of parentheses,
// equal sign greater than => which is an arrow function, 
// opening pair of curly braces {}
app.get('/', (req, res) => {
    res.send('Hello world');
});

//Make the server live.
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);