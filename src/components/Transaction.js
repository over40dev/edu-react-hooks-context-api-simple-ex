import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {numberWithCommas} from '../utils/format';

export const Transaction = ({t}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  const {_id, text, amount} = t;
  const [sign, signClass] = (amount < 0 ? ['-', 'minus'] : ['+', 'plus']);

  return (
  <li className={signClass}>
    {text} <span>{`${sign} $${numberWithCommas(Math.abs(amount))}`}</span>
    <button className="delete-btn" onClick={() => deleteTransaction(_id)}>x</button>
  </li>
)}
