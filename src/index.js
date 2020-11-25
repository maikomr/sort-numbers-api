const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const numbersRouter = require('./api/numbers/router');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/numbers', numbersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
