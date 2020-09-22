import React, { useContext } from 'react';

import { ListContext } from '../context';

const ExpenseList = () => {
  const { expenseList, deleteExpenseItem } = useContext(ListContext);

  return (
    <div className="expense">
      <h2>Expense</h2>
      <ul>
        {expenseList.map((item, i) => (
          <li key={i} onClick={() => deleteExpenseItem(i)}>
            <i>&times;</i>
            <span>{item.description} :</span>
            <span>-{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
