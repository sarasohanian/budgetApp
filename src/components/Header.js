import React, { useContext } from 'react';

import { HeaderContext } from '../context';

const Header = () => {
  const { income, expense } = useContext(HeaderContext);

  return (
    <div className="Header">
      <h1>Budget App</h1>
      <div className="budget-row total">
        <div className="budget-inner">
          <span>Total Amount</span>
          <span>{income - expense}</span>
        </div>
      </div>
      <div className="budget-row income-border">
        <div className="budget-inner">
          <span>Income</span>
          <span>{income}</span>
        </div>
      </div>
      <div className="budget-row expense-border">
        <div className="budget-inner">
          <span>Expense</span>
          <span>{expense}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
