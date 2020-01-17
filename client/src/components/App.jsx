import React from 'react';
import css from '../styles/styles.css';
import axios from 'axios';

import Landing from './Landing.jsx';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
import Confirmation from './Confirmation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      email: '',
      password: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      exp: '',
      cvv: '',
      billingZip: ''
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.handleBilling = this.handleBilling.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    });
  }

  prevStep() {
    this.setState({
      step: this.state.step - 1
    });
  }

  // big lesson: onChange is an invocation itself
  // unless method passed down into prop returns something explicit
  // generally onChange should handle a function definition
  // NOT a function invocation
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAccount(e) {
    const accountData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post('/account', accountData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleShipping(e) {
    const shippingData = {
      addressOne: this.state.addressOne,
      addressTwo: this.state.addressTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    };

    axios
      .post('/shipping', shippingData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleBilling(e) {
    const billingData = {
      cc: this.state.cc,
      exp: this.state.exp,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    };

    axios
      .post('/billing', billingData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handlePurchase(e) {
    this.setState({
      step: this.state.step - 4
    });
  }

  render() {
    const {
      name,
      email,
      password,
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
    } = this.state;
    const values = {
      // values: {this.state.name, etc}
      name,
      email,
      password,
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
    };

    switch (this.state.step) {
      case 1:
        return <Landing nextStep={this.nextStep} />;
      case 2:
        return (
          <FormOne
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleAccount={this.handleAccount}
            values={values}
          />
        );
      case 3:
        return (
          <FormTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleShipping={this.handleShipping}
            values={values}
          />
        );
      case 4:
        return (
          <FormThree
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleBilling={this.handleBilling}
            values={values}
          />
        );
      case 5:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handlePurchase={this.handlePurchase}
            values={values}
          />
        );
    }
  }
}

export default App;
