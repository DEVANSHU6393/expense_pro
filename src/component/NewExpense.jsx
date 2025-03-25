import React from "react";
import "./NewExpenses.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";


const NewExpense=({onAddExpense})=>{
  const[isEditing,setIsEditing]=useState(false);

  const starEditingHandler = () =>{
    setIsEditing(true)
  }
  const stopEditingHandler =()=>{
    setIsEditing(false)
  }
  const onSaveExpenseDataHandler = (enterExpenseData)=>{
    const expenseData ={
      id:Math.random().toString(),
      ...enterExpenseData
    }
    console.log(expenseData);
    onAddExpense(expenseData);
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={starEditingHandler}>add new expense</button>}
      {isEditing && <ExpenseForm stopEditingHandler={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler}/>}

    </div>
  );
}
export default NewExpense;