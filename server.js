const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/database');

const users = require('./routes/users');

// Connect to mysql
db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('mysql connected...')
    }
});

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Use Routes
app.use('/api/users', users);


app.listen(5000, () => {
    console.log('Server Started On Port 5000...');
});


module.exports = app;