import React from 'react';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.purchase = this.purchase.bind(this);
    this.prev = this.prev.bind(this);
  }

  purchase(e) {
    e.preventDefault();
    this.props.handlePurchase();
  }

  prev(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {
      values: {
        name,
        email,
        addressOne,
        addressTwo,
        city,
        state,
        zip,
        phone,
        cc,
        exp,
        cvv,
        billingZip
      }
    } = this.props;

    return (
      <div>
        <h2>Confirm your details</h2>
        <div>
          <li name='name'>Name: {name}</li>
          <li name='email'>Email: {email}</li>
          <li name='addressOne'>Address Line 1: {addressOne}</li>
          <li name='addressTwo'>Address Line 2: {addressTwo}</li>
          <li name='city'>City: {city}</li>
          <li name='state'>State: {state}</li>
          <li name='zip'>Zip: {zip}</li>
          <li name='phone'>Phone: {phone}</li>
          <li name='cc'>Credit Card Number: {cc}</li>
          <li name='exp'>Expiration Date: {exp}</li>
          <li name='cvv'>CVV: {cvv}</li>
          <li name='billingZip'>Billing Zip Code: {billingZip}</li>

          <button className='btn-prev' onClick={this.prev}>
            Prev
          </button>

          <button className='btn-purchase' onClick={this.purchase}>
            Purchase
          </button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
