import './Expenses.css/';
import Card from './Card.jsx'
import React,{useState} from "react"
import ExpenseChart from "./ExpenseChart.jsx"


import ExpensesList from './ExpensesList.jsx';
import ExpenseFilter from './ExpenseFilter.jsx';


const Expenses = ({items}) => {

    const[filteredYear,setFilteredYear]=useState('2020')
    const filteredChangeHandler=(selectedyear)=>{
        setFilteredYear(selectedyear)
    }

    const filteredExpenses=items.filter((expenses)=>{
        return expenses.date.getFullYear().toString()===filteredYear
    })
    return(
        <>
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterChange={filteredChangeHandler} />
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
        </>
    )

};
export default Expenses