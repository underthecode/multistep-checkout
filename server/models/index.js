const db = require('../../database/index');

const createAccount = (body, callback) => {
  db.Account.create(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Models: Account POST Success');
      callback(null, data);
    }
  });
};

const createShipping = (body, callback) => {
  db.Shipping.create(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Models: Shipping POST Success');
      callback(null, data);
    }
  });
};

const createBilling = (body, callback) => {
  db.Billing.create(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Models: Shipping POST Success');
      callback(null, data);
    }
  });
};

module.exports = {
  createAccount,
  createShipping,
  createBilling
};
