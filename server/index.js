const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.send('hello');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Multistep Checkout is listening on ${PORT}`);
});
