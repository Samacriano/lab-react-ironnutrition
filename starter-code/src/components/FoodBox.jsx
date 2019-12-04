import React from 'react'

function FoodBox(props) {
    return (
        
            <div className="media">
  <img
    src={props.image}
    className="img-thumbnail mr-3 mw-25 border-0"
    style= {{maxWidth: "10em"}}
  />
  <div className="media-body align-self-center">
    <h5 className="mt-0 mb-1">{props.name}</h5>
<small>{props.calories}</small>
  </div>
  <form className="row align-self-center">
    <input className="form-control col-9" type="number" value={props.quantity} />
    <button className="btn btn-primary col-3">+</button>
  </form>
        </div>
    )
}

export default FoodBox
