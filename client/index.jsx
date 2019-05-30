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
        <button className="btn-checkout" onClick={this.checkout}>
          Proceed to Checkout
        </button>
      </div>
    );
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next(e) {
    e.preventDefault();
    this.props.nextStep();
    this.props.handleAccount();
  }

  prev(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <div>
        <h2>Create Account</h2>
        <form>
          <label>
            Name
            <input
              name="name"
              onChange={this.props.handleChange('name')}
              defaultValue={this.props.values.name}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              onChange={this.props.handleChange('email')}
              defaultValue={this.props.values.email}
            />
          </label>

          <label>
            Password
            <input
              name="password"
              onChange={this.props.handleChange('password')}
              defaultValue={this.props.values.password}
            />
          </label>

          <button className="btn-prev" onClick={this.prev}>
            Prev
          </button>

          <button className="btn-next" onClick={this.next}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next(e) {
    e.preventDefault();
    this.props.nextStep();
    this.props.handleShipping();
  }

  prev(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <div>
        <h2>Shipping</h2>
        <form>
          <label>
            Address Line 1
            <input
              name="addressOne"
              onChange={this.props.handleChange('addressOne')}
              defaultValue={this.props.values.addressOne}
            />
          </label>

          <label>
            Address Line 2
            <input
              name="addressTwo"
              onChange={this.props.handleChange('addressTwo')}
              defaultValue={this.props.values.addressTwo}
            />
          </label>

          <label>
            City
            <input
              name="city"
              onChange={this.props.handleChange('city')}
              defaultValue={this.props.values.city}
            />
          </label>

          <label>
            State
            <input
              name="state"
              onChange={this.props.handleChange('state')}
              defaultValue={this.props.values.state}
            />
          </label>

          <label>
            Zip Code
            <input
              name="zip"
              onChange={this.props.handleChange('zip')}
              defaultValue={this.props.values.zip}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              onChange={this.props.handleChange('phone')}
              defaultValue={this.props.values.phone}
            />
          </label>

          <button className="btn-prev" onClick={this.prev}>
            Prev
          </button>

          <button className="btn-next" onClick={this.next}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

class F3 extends React.Component {
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
              name="cc"
              onChange={this.props.handleChange('cc')}
              defaultValue={this.props.values.cc}
            />
          </label>

          <label>
            Expiration Date
            <input
              name="exp"
              onChange={this.props.handleChange('exp')}
              defaultValue={this.props.values.exp}
            />
          </label>

          <label>
            CVV
            <input
              name="cvv"
              onChange={this.props.handleChange('cvv')}
              defaultValue={this.props.values.cvv}
            />
          </label>

          <label>
            Billing Zip Code
            <input
              name="billingZip"
              onChange={this.props.handleChange('billingZip')}
              defaultValue={this.props.values.billingZip}
            />
          </label>

          <button className="btn-prev" onClick={this.prev}>
            Prev
          </button>

          <button className="btn-next" onClick={this.next}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

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
          <li name="name">Name: {name}</li>
          <li name="email">Email: {email}</li>
          <li name="addressOne">Address Line 1: {addressOne}</li>
          <li name="addressTwo">Address Line 2: {addressTwo}</li>
          <li name="city">City: {city}</li>
          <li name="state">State: {state}</li>
          <li name="zip">Zip: {zip}</li>
          <li name="phone">Phone: {phone}</li>
          <li name="cc">Credit Card Number: {cc}</li>
          <li name="exp">Expiration Date: {exp}</li>
          <li name="cvv">CVV: {cvv}</li>
          <li name="billingZip">Billing Zip Code: {billingZip}</li>

          <button className="btn-prev" onClick={this.prev}>
            Prev
          </button>

          <button className="btn-purchase" onClick={this.purchase}>
            Purchase
          </button>
        </div>
      </div>
    );
  }
}

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

  handleChange(input) {
    e => {
      this.setState({
        [input]: e.target.value
      });
    };
  }

  handleAccount(e) {
    fetch('/account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    });
  }

  handleShipping(e) {
    fetch('/shipping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        addressOne: this.state.addressOne,
        addressTwo: this.state.addressTwo,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone
      })
    });
  }

  handleBilling(e) {
    fetch('/billing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cc: this.state.cc,
        exp: this.state.exp,
        cvv: this.state.cvv,
        billingZip: this.state.billingZip
      })
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
      cc,
      exp,
      cvv,
      billingZip
    } = this.state;
    const values = {
      name,
      email,
      password,
      addressOne,
      addressTwo,
      city,
      state,
      zip,
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
          <F1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleAccount={this.handleAccount}
            values={values}
          />
        );
      case 3:
        return (
          <F2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleShipping={this.handleShipping}
            values={values}
          />
        );
      case 4:
        return (
          <F3
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

ReactDOM.render(<App />, document.getElementById('app'));
