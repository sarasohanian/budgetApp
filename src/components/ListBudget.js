import React from 'react';

import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';

const ListBudget = () => {
  return (
    <div className="list-budget">
      <div className="list-wrapper">
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
};

export default ListBudget;
