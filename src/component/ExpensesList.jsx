import ExpenseItems from "./ExpenseItem.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import './ExpensesList.css';
import React from 'react';

const ExpensesList = ({items}) => {
if(items.length==0){
  return <h2 className="">Found no Expense</h2>

}

  return(
      <ul className='expenses-list'>
          {items.map((expenses)=>
          (<ExpenseItems
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}/>

          ))
          };
      </ul>
  )

};

export default ExpensesList

