import React, { Component } from 'react';
import './App.scss';
import foods from './foods.json';

import foodList from './foods';
import FoodBox from './components/FoodBox';
import AddFoods from './components/AddFoods';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      foods: foods,
      show: false
    };
    //this.handleChange = this.handleChange.bind(this);
    this.toggleDiv = this.toggleDiv.bind(this)
  }


  toggleDiv = () => {
    const {show} = this.state;
    this.setState( { show : !show })
}

     handleChange(foods) {
        let currentList = [];
        let newList = [];
        if (foods.target.value !== "") {
          currentList = this.state.foods;
          newList = currentList.filter(item => {
            const lc = item.toLowerCase;
            const filter = foods.target.value.toLowerCase();
            return lc.includes(filter);
          });
        } else {
          newList = this.state.foods;
        }
        this.setState({
          foods: newList
        });
      }
 

  addFoodHandler = (food) => {
    const newFood = [...this.state.foods];
    newFood.push(food);
    this.setState({
      foods: newFood
    })
  }




  render() {
    return (

      <div className="App">

        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        <button className="btn btn-light" onClick={this.toggleDiv}>Add food</button>
        {this.state.show && <AddFoods addTheIngredient={this.addFoodHandler} />}
        {this.state.foods.map((food, index) => (
          <FoodBox
            key={index}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
          />
        ))}
      </div>
    );
  }
}

export default App;
