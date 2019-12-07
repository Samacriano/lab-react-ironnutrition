import React, { Component } from 'react';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleQuantityChange(event) {
    const value = event.target.valueAsNumber;
    this.setState({
      quantity: value
    });
  }

  handleSubmission(event) {
    event.preventDefault();
    const food = this.props.food;
    const quantity = this.state.quantity;
    this.props.handleAddition({
      ...food,
      quantity
    });
    this.setState({
      quantity: 1
    });
  }

  render() {
    const food = this.props.food;
    const imageStyles = {
      // maxWidth: '10em'
      maxWidth: '6em'
    };
    return (
      <div className="media">
        <img
          src={food.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={imageStyles}
          alt={food.name}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{food.name}</h5>
          <small>{food.calories} cal</small>
        </div>
        <form
          className="row align-self-center"
          onSubmit={this.handleSubmission}
        >
          <input
            className="form-control col-9"
            type="number"
            value={this.state.quantity}
            onChange={this.handleQuantityChange}
          />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default FoodBox;