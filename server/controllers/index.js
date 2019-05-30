const models = require('../models/index');

const createAccount = (body, callback) => {
  models.createAccount(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Controllers: Account POST Success');
      callback(null, data);
    }
  });
};

const createShipping = (body, callback) => {
  models.createShipping(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Controllers: Shipping POST Success');
      callback(null, data);
    }
  });
};

const createBilling = (body, callback) => {
  models.createBilling(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Controllers: Billing POST Success');
      callback(null, data);
    }
  });
};

module.exports = {
  createAccount,
  createShipping,
  createBilling
};
