import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SearchFood(props) {
  return (
    <Form.Control
      type="text"
      placeholder="Search for any food..."
      value={props.value}
      onChange={props.onChange}
    />
    // <input
    //   className="form-control"
    //   type="search"
    //   placeholder="Search for any food..."
    //   value={props.value}
    //   onChange={props.onChange}
    // />
  );
}