require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const info = require('./routes/api/info');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/info', info);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
	console.log(`Server running on port ${port}`);
});
