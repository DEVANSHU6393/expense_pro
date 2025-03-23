import React from "react";
import "./NewExpenses.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";


const NewExpense=()=>{
  const[isEditing,setIsEditing]=useState(false);

  const starEditingHandler = () =>{
    setIsEditing(true)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={starEditingHandler}>add new expense</button>}
      {isEditing && <ExpenseForm/>}

    </div>
  );
}
export default NewExpense;