import mysql from 'mysql';
import dbconfig from './../config/db';

const db = mysql.createConnection(dbconfig);

// Setup Connection
db.connect((err) => {
    if (err) console.log(err);
    else console.log("Database Conected !");
});
export default db;
