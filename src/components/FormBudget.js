import React, { useContext } from 'react';

import { FormContext } from '../context';

const FormBudget = () => {
  const {
    option,
    description,
    amount,
    descriptionHandler,
    amountHandler,
    optionHandler,
    submitForm,
  } = useContext(FormContext);

  return (
    <div className="form-budget">
      <form onSubmit={submitForm}>
        <select
          value={option}
          onChange={(e) => optionHandler(e.target.value)}
          className="select"
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => descriptionHandler(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => amountHandler(e.target.value)}
          required
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default FormBudget;
