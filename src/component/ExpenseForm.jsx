import React,{useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm=({stopEditingHandler,onSaveExpenseData})=>{
  const[title,setTitle]=useState('');
  const[amount,setAmount]=useState('');
  const[date,setDate]=useState('');

  const titleChangeHandler=(event)=>{
    
    setTitle(event.target.value)
  }
  const amountChangeHandler=(event)=>{
    
    setAmount(event.target.value)
  }
  const dateChangeHandler=(event)=>{
    setDate(event.target.value)
  }
  const SubmitHandler=event=>{
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(expenseData,"This is my Expense")
    onSaveExpenseData(expenseData)
  }

  return <form onSubmit={SubmitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label className="new-expense__control label" >Title</label>
        <input type="text" value={title} onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label className="new-expense__control label" >Amount</label>
        <input type="number" value={amount} onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label  className="new-expense__control label">Date</label>
        <input type="date" value={date} onChange={dateChangeHandler} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type="button" onClick={stopEditingHandler} >Cancel</button>
      <button type='submit' onClick={SubmitHandler}>Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;