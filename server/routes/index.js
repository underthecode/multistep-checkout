const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', (req, res) => {
  res.status(200).send('Homepage renders');
});

router.post('/account', (req, res) => {
  controllers.createAccount(req.body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Routes: Account POST Success');
      res.status(201).send(data);
    }
  });
});

router.post('/shipping', (req, res) => {
  controllers.createShipping(req.body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Routes: Shipping POST Success');
      res.status(201).send(data);
    }
  });
});

router.post('/billing', (req, res) => {
  controllers.createBilling(req.body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Routes: Billing POST Success');
      res.status(201).send(data);
    }
  });
});

module.exports = router;
