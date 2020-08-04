const Sequelize = require('sequelize');
const { database, user, password, host, dialect, port } = require('./auth');

const db = new Sequelize(database, user, password, {
  host: host,
  dialect: dialect,
  port: port
});

db.authenticate()
  .then(() => {
    console.log('MySQL database connected');
  })
  .catch((err) => {
    console.log('Err', err);
  });

const Account = db.define(
  'Account',
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  },
  {
    timestamps: true,
    freezeTableName: true
  }
);

const Shipping = db.define(
  'Shipping',
  {
    addressOne: Sequelize.STRING,
    addressTwo: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.INTEGER,
    phone: Sequelize.STRING
  },
  {
    timestamps: true,
    freezeTableName: true
  }
);

const Billing = db.define(
  'Billing',
  {
    cc: Sequelize.STRING,
    exp: Sequelize.INTEGER,
    billingZip: Sequelize.INTEGER,
    state: Sequelize.STRING,
    zip: Sequelize.INTEGER
  },
  {
    timestamps: true,
    freezeTableName: true
  }
);

db.sync();

module.exports = { Account, Shipping, Billing };
