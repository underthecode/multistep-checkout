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
          Checkout
        </button>
      </div>
    );
  }
}

class F1 extends React.Component {
  next(e) {
    e.preventDefault();
    this.props.nextStep();
  }

  back(e) {
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

          <button className="btn-next" onClick={this.next}>
            Next
          </button>
        </form>
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
      addressLine1: '',
      addressLine2: '',
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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    alert(`Your registration detail: \n
           Email: ${this.state.email} \n
           Username: ${this.state.username} \n
           Password: ${this.state.password}`);
  }

  render() {
    const {
      name,
      email,
      password,
      addressLine1,
      addressLine2,
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
      addressLine1,
      addressLine2,
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
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <F2 />;
      case 4:
        return <F3 />;
      case 5:
        return <Confirmation />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
