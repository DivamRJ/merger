const express = require('express');
const port = 3000;
console.log("another bullshit try")
const app = express();
console.log("hello from the changed merged etc")
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port)
