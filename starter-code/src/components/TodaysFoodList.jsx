import React from 'react';

export default function TodaysFoodList(props) {
  const total = props.list.reduce((acc, value) => {
    return acc + value.quantity * value.calories;
  }, 0);
  return (
    <div>
      <ul>
        {props.list.map(food => {
          return (
            <li>
              <span>
                {food.quantity} {food.name} - {food.calories * food.quantity}{' '}
                calories
              </span>
            </li>
          );
        })}
      </ul>
      <strong>Total Calories: </strong>
      <span>{total}</span>
    </div>
  );
}