import React from 'react';

class FormTwo extends React.Component {
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
              name='addressOne'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.addressOne}
            />
          </label>

          <label>
            Address Line 2
            <input
              name='addressTwo'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.addressTwo}
            />
          </label>

          <label>
            City
            <input
              name='city'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.city}
            />
          </label>

          <label>
            State
            <input
              name='state'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.state}
            />
          </label>

          <label>
            Zip Code
            <input
              name='zip'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.zip}
            />
          </label>

          <label>
            Phone
            <input
              name='phone'
              onChange={this.props.handleChange}
              defaultValue={this.props.values.phone}
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

export default FormTwo;
