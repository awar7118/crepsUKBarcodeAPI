const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('<h1>👋 from CrepsUk</h1>');
});

module.exports = app;
