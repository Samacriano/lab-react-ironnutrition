import React, { Component } from 'react';
import './App.scss';

import foodList from './foods';

import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';
import FoodBox from './components/FoodBox';
import TodaysFoodList from './components/TodaysFoodList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      foodList: foodList,
      todaysFoodList: [],
      searchQuery: ''
    };
    this.triggerAddFoodForm = this.triggerAddFoodForm.bind(this);
    this.handleAddFoodFormSubmission = this.handleAddFoodFormSubmission.bind(
      this
    );
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddToTodaysList = this.handleAddToTodaysList.bind(this);
  }

  triggerAddFoodForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  handleAddFoodFormSubmission(data) {
    this.setState({
      showForm: false,
      foodList: [...this.state.foodList, data]
    });
  }

  handleSearch(event) {
    const query = event.target.value;
    this.setState({
      searchQuery: query
    });
  }

  handleAddToTodaysList(data) {
    const list = [...this.state.todaysFoodList];
    if (list.find(item => item.name === data.name)) {
      const index = list.findIndex(item => item.name === data.name);
      list[index].quantity += data.quantity;
    } else {
      list.push(data);
    }
    this.setState({
      todaysFoodList: list
    });
  }

  get filteredFoodList() {
    const list = this.state.foodList;
    const query = this.state.searchQuery;
    const filteredList = list.filter(food => {
      return food.name.toLowerCase().includes(query.toLowerCase());
    });
    return filteredList;
  }

  render() {
    return (
      <Container>
        <SearchFood
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <Row>
          <Col>
            {this.filteredFoodList.map(food => {
              return (
                <FoodBox
                  food={food}
                  key={food.name}
                  handleAddition={this.handleAddToTodaysList}
                />
              );
            })}
            <button
              className="btn btn-primary"
              onClick={this.triggerAddFoodForm}
            >
              Add Food
            </button>
            {/* The choice of the name for the onSubmit prop name is arbitrary, you can name it whatever makes sense in that context */}
            {this.state.showForm && (
              <AddFood onSubmit={this.handleAddFoodFormSubmission} />
            )}
          </Col>
          <Col>
            <TodaysFoodList list={this.state.todaysFoodList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;