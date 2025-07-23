import React from 'react';

const IngredientList = (props) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li
            key={index}
            style={{
              backgroundColor: ingredient.color,
              color: 'white',
              padding: '8px',
              margin: '5px 0',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {ingredient.name}
            <button onClick={() => props.onAdd(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
