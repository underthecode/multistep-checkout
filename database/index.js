const mysql = require('mysql');

const db = require('./auth');

const connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log(`Multistep Checkout is connected to MySQL`);
});

module.exports = connection;
