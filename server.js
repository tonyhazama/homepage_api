import express from 'express';
import connection from './app/libs/connection';

const app = express();
const port = 4722;

import { ROUTES } from './app/routes';

// Use Module
app.use([
    // JSON Bodyparser
    express.json(), 
    ...ROUTES,


    // CORS Setting
    function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:4721");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
    // express.urlencoded()
]);

// Routes
// require('./app/routes') (app, connection);

// Port Configuration
app.listen(port, () => {
    console.log('Server Started !');
});