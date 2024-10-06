import './ExpenseItem.css';
function ExpenseItem(){
  const expenseDate = new Date(2024, 7, 11).toISOString();
  const expenseTitle = "Book";
  const expenseAmount = 10;
  return(
    <div className='expense-item'>
    <div>{expenseDate}</div>
    <div className='expense-item__description'>
        <div>{expenseTitle}</div>
        <div className='expense-item__price'>${expenseAmount}</div>
    </div>
    </div>
  )
}

export default ExpenseItem;