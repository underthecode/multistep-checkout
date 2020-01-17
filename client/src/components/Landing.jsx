import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.checkout = this.checkout.bind(this);
  }

  checkout(e) {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h2>Checkout</h2>
        <button className='btn-checkout' onClick={this.checkout}>
          Proceed to Checkout
        </button>
      </div>
    );
  }
}

export default Landing;
