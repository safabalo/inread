const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 2001, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);

module.exports = app;
