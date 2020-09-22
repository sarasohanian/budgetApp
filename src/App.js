import React, { useEffect, useState } from 'react';

import './App.css';

import FormBudget from './components/FormBudget';
import Header from './components/Header';
import ListBudget from './components/ListBudget';

import { HeaderContext, FormContext, ListContext } from './context';

const App = () => {
  const setIncomeExpense = (title) => {
    return window.localStorage.getItem(title)
      ? Number(window.localStorage.getItem(title))
      : 0;
  };

  const setIncomeExpenseList = (list) => {
    return window.localStorage.getItem(list)
      ? JSON.parse(window.localStorage.getItem(list))
      : [];
  };

  // header state
  const [income, setIncome] = useState(setIncomeExpense('income'));
  const [expense, setExpense] = useState(setIncomeExpense('expense'));

  // form state
  const [option, setOption] = useState('+');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // list state

  const [incomeList, setIncomeList] = useState(
    setIncomeExpenseList('incomeList')
  );
  const [expenseList, setExpenseList] = useState(
    setIncomeExpenseList('expenseList')
  );

  // form function

  const descriptionHandler = (title) => {
    setDescription(title);
  };

  const amountHandler = (amnt) => {
    setAmount(amnt);
  };

  const optionHandler = (opt) => {
    setOption(opt);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (description !== '') {
      if (option === '+') {
        setIncome(income + parseFloat(amount));
        setIncomeList([...incomeList, { description, amount }]);
      } else {
        setExpense(expense + parseFloat(amount));
        setExpenseList([...expenseList, { description, amount }]);
      }
      setOption('+');
      setDescription('');
      setAmount('');
    }
  };

  // list-delet-function

  const deleteIncomeItem = (index) => {
    const deleteItemSelect = incomeList[index];
    setIncome(income - parseFloat(deleteItemSelect.amount));

    const newIncomeList = [...incomeList];
    newIncomeList.splice(index, 1);
    setIncomeList(newIncomeList);
  };

  const deleteExpenseItem = (index) => {
    const deleteItemSelect = expenseList[index];
    setExpense(expense - parseFloat(deleteItemSelect.amount));

    const newExpenseList = [...expenseList];
    newExpenseList.splice(index, 1);
    setExpenseList(newExpenseList);
  };

  // local storage set

  const setLocalStorage = () => {
    window.localStorage.setItem('income', income);
    window.localStorage.setItem('expense', expense);
    window.localStorage.setItem('incomeList', JSON.stringify(incomeList));
    window.localStorage.setItem('expenseList', JSON.stringify(expenseList));
  };
  useEffect(setLocalStorage, [income, expense, incomeList, expenseList]);

  return (
    <div className="app">
      <HeaderContext.Provider value={{ income, expense }}>
        <Header />
      </HeaderContext.Provider>
      <FormContext.Provider
        value={{
          option,
          description,
          amount,
          descriptionHandler,
          amountHandler,
          optionHandler,
          submitForm,
        }}
      >
        <FormBudget />
      </FormContext.Provider>
      <ListContext.Provider
        value={{ incomeList, expenseList, deleteIncomeItem, deleteExpenseItem }}
      >
        <ListBudget />
      </ListContext.Provider>
    </div>
  );
};

export default App;
