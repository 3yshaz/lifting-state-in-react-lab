import React from 'react';

const BurgerStack = (props) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {[...props.stack].reverse().map((ingredient, index) => (
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
            <button
              onClick={() => props.onRemove(props.stack.length - 1 - index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
