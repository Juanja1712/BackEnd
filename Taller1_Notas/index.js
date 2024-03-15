const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/database');
const routes = require('./routes');

const app = express();
const port = 3002;

connectDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',  routes);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});