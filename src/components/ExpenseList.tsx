import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";
function ExpenseList() {
const { expenses, error, deleteExpense, loading } = useContext(ExpenseContext);
if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>{error}</p>;
  }
if (expenses.length === 0) {
  return <p>No expenses yet</p>;
}
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet</p>}

      <ul>
        {expenses.map((expense) => (
  <ExpenseItem
    key={expense.id}
    expense={expense}
    onDelete={deleteExpense}
  />
))}
      </ul>
    </div>
  );
}

export default ExpenseList;