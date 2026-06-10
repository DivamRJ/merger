const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-Parser')

app.use(bodyParser.json());
app.post('/conversations', (req, res) => {
  console.log(req.body);
  res.send("2+2=4")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
