import ExpenseItems from "./ExpenseItem"

const ExpenseList = ({item}) => {

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
}
export default ExpenseList
