import React from 'react';

class FormOne extends React.Component {
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
              name='name'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.name}
            />
          </label>

          <label>
            Email
            <input
              name='email'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.email}
            />
          </label>

          <label>
            Password
            <input
              name='password'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.password}
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

export default FormOne;
