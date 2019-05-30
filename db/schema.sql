DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;
USE checkout;

CREATE TABLE account
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(200),
  email VARCHAR
  (200),
  password VARCHAR
  (200),
  PRIMARY KEY
  (id)
);

CREATE TABLE shipping
(
  id INT NOT NULL AUTO_INCREMENT,
  addressOne VARCHAR(200),
  addressTwo VARCHAR(200),
  city VARCHAR(200),
  state VARCHAR(50),
  zip INT,
  phone VARCHAR(200),
  accountId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (accountId) REFERENCES account(id)
);

CREATE TABLE billing
(
  id INT NOT NULL AUTO_INCREMENT,
  cc VARCHAR(200),
  exp INT,
  cvv INT,
  billingZip INT,
  accountId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (accountId) REFERENCES account(id)
);

