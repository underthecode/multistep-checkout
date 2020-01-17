import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next(e) {
    e.preventDefault();
    this.props.nextStep();
    this.props.handleBilling();
  }

  prev(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <div>
        <h2>Billing</h2>
        <form>
          <label>
            Credit Card Number
            <input
              name='cc'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.cc}
            />
          </label>

          <label>
            Expiration Date
            <input
              name='exp'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.exp}
            />
          </label>

          <label>
            CVV
            <input
              name='cvv'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.cvv}
            />
          </label>

          <label>
            Billing Zip Code
            <input
              name='billingZip'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.billingZip}
            />
          </label>

          <button className='btn-prev' onClick={this.prev}>
            Prev
          </button>

          <button className='btn-next' onClick={this.next}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default FormThree;
