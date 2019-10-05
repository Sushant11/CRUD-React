import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/v1/users', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Users Retireved Successfully',
        users: db
    })
});

const PORT = 4200;

app.listen (PORT, () => {
    console.log(`server running on port ${PORT}`)
});