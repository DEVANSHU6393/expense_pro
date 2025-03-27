import Card from './Card.jsx'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItems=({title,amount,date})=>{
return(
  <li>
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs.{amount}</div>
      </div>
    </Card>
  </li>
)}
export default ExpenseItems;