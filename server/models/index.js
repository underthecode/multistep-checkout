const db = require('../../database/index');

const createAccount = (body, callback) => {
  const query = `INSERT INTO account (name, email, password) VALUES (?, ?, ?)`;
  const values = [body.name, body.email, body.password];
  db.query(query, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Models: Account POST Success');
      callback(null, data);
    }
  });
};

const createShipping = (body, callback) => {
  const query = `INSERT INTO shipping (addressOne, addressTwo, city, state, zip, phone) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [
    body.addressOne,
    body.addressTwo,
    body.city,
    body.state,
    body.zip,
    body.phone
  ];
  db.query(query, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Models: Shipping POST Success');
      callback(null, data);
    }
  });
};

const createBilling = (body, callback) => {
  const query = `INSERT INTO billing (cc, exp, cvv, billingZip) VALUES (?, ?, ?, ?)`;
  const values = [body.cc, body.exp, body.cvv, body.billingZip];
  db.query(query, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Models: Billing POST Success');
      callback(null, data);
    }
  });
};

module.exports = {
  createAccount,
  createShipping,
  createBilling
};
