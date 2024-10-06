import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem date={new Date(2024, 7, 11)} title='Insurance' price='105'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 6, 11)} title='Book' price='100'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 5, 11)} title='Pen' price='10'></ExpenseItem>
      <ExpenseItem date={new Date(2024, 4, 11)} title='Laptop' price='1000'></ExpenseItem>
    </div>
  )
}

export default App;
