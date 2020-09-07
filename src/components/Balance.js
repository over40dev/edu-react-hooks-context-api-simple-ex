import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {

  const {transactions} = useContext(GlobalContext);
  const balance = transactions.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(balance)}</h1>
    </>
  )
}
