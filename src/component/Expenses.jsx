import "./Expenses.css"
import ExpenseList from "./ExpensesList"
function Expenses({items}) {


  return (
    <div className="expenses">
      <ExpenseList item={items} />
    </div>
  )
}

export default Expenses