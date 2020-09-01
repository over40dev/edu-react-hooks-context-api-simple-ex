import React from 'react'

export const Transaction = ({t}) => {

  const {text, amount} = t;
  const [sign, signClass] = (amount < 0 ? ['-', 'minus'] : ['+', 'plus']);
  // const sign = (amount < 0 ? '-' : '+');
  // const signClass = (amount < 0 ? 'minus' : 'plus');
  
  return (
  <li className={signClass}>
    {text} <span>{`${sign} $${Math.abs(amount)}`}</span><button className="delete-btn">x</button>
  </li>
)}
