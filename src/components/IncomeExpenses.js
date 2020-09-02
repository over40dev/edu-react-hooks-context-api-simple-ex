import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);
  const [income, expense] = transactions.reduce((prev, curr) => {
    return ((curr.amount > 0) ? [prev[0] + Math.abs(curr.amount), prev[1]] : [prev[0], prev[1] + Math.abs(curr.amount)]);
  }, [0, 0]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense.toFixed(2)}</p>
      </div>
    </div>
  )
}
