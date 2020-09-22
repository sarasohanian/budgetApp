import React, { useContext } from 'react';

import { ListContext } from '../context';

const IncomeList = () => {
  const { incomeList, deleteIncomeItem } = useContext(ListContext);

  return (
    <div className="income">
      <h2>Income</h2>
      <ul>
        {incomeList.map((item, i) => (
          <li key={i} onClick={() => deleteIncomeItem(i)}>
            <i>&times;</i>
            <span>{item.description} :</span>
            <span>+{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
