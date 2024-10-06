import './ExpenseItem.css';
function ExpenseItem(){
  return(
    <div className='expense-item'>
    <div>11 July 2024</div>
    <div className='expense-item__description'>
        <div>Book</div>
        <div className='expense-item__price'>$10</div>
    </div>
    </div>
  )
}

export default ExpenseItem;