import ExpenseItems from "./ExpenseItem"
import './ExpensesList.css'

const ExpenseList = ({item}) => {
  if(item.length===0){
    return <h2 className="">Found no Expense</h2>
  return (
    <ul>
      {item.map((expenses) =>
      (<ExpenseItems
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date} />))}
    </ul>
  )
}}
export default ExpenseList
