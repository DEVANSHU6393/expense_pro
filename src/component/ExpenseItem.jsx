import Card from './Card.jsx'

const ExpenseItems=({title,amount,date})=>{
return(
  <li>
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs.{amount}</div>
      </div>
    </Card>
  </li>
)}
export default ExpenseItems;