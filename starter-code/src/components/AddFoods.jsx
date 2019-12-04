import React, { Component } from 'react'

class AddFoods extends Component {

    constructor(props){
        super(props);
  
        this.state = { 
          name: '',
          calories: '',
          image: ''
        }
       
    }

    

 

    handleNameInput = (event) => {
        this.setState({
          name: event.target.value
        })
      }
    
      handleCaloriesInput = (event) => {
        this.setState({
          calories: event.target.value
        })
      }

      handleImageInput = (event) => {
        this.setState({
          image: event.target.value
        })
      }
    

      handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheIngredient(this.state);   
        this.setState({
          name: '',
          calories: '',
          image: ''
        })  
      }

    render() {
        return (
            <div>
                 {/* <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand">Iron Nutrition </a>
                    <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </nav> */}
            

            
            <form onSubmit={this.handleFormSubmit} id='foodsForms' className="form-group" >
            
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} className='form-control' onChange={(e) => this.handleNameInput(e)} />
      
                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} className='form-control' onChange={(e) => this.handleCaloriesInput(e)} />

                <label >Image</label>
                <input type="text" name="image" value={this.state.image} className='form-control' onChange={(e) => this.handleImageInput(e)} />
                
                <input type="submit" value="Submit" />
            
            </form>
          </div>
        );
    }
}

export default AddFoods
















