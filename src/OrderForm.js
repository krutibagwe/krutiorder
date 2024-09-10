//OrderForm.js
import React, { Component } from 'react';
import './OrderForm.css'; 

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      date: '',
      orderNumber: '',
      errorMessage: ''
    };

    // Bind event handler methods to the component instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function to validate if the name contains only letters and spaces
  validateName(name) {
    const namePattern = /^[A-Za-z\s]*$/;
    return namePattern.test(name);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    if (name === 'name') {
      if (this.validateName(value)) {
        this.setState({ errorMessage: '' });
      } else {
        this.setState({ errorMessage: 'Name can only contain letters and spaces' });
      }
    }
  }

  // Handle form submission
  handleSubmit(event) {
    event.preventDefault();

    // Perform final validation
    if (!this.validateName(this.state.name)) {
      this.setState({ errorMessage: 'Name can only contain letters and spaces' });
      return;
    }

    // Log form inputs to the console
    console.log('Form Submitted:');
    console.log(`Name: ${this.state.name}`);
    console.log(`Address: ${this.state.address}`);
    console.log(`Date: ${this.state.date}`);
    console.log(`Order Number: ${this.state.orderNumber}`);

    // Show success alert
    alert('Order Submitted!');

    //reset the form fields after submission
    this.setState({
      name: '',
      address: '',
      date: '',
      orderNumber: '',
      errorMessage: ''
    });
  }

  render() {
    return (
      <div className="form-container">
        <h1>New Order</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Order Number:
            <input
              type="text"
              name="orderNumber"
              value={this.state.orderNumber}
              onChange={this.handleChange}
              required
            />
          </label>
          {this.state.errorMessage && (
            <div className="error-message">{this.state.errorMessage}</div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
