const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'checkout'
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log(`Multistep Checkout is connected to database`);
});

module.exports = connection;
