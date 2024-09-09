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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Order Submitted!');
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
