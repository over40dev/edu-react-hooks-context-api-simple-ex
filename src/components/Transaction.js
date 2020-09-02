import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({t}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  const {id, text, amount} = t;
  const [sign, signClass] = (amount < 0 ? ['-', 'minus'] : ['+', 'plus']);

  return (
  <li className={signClass}>
    {text} <span>{`${sign} $${Math.abs(amount)}`}</span>
    <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
  </li>
)}
