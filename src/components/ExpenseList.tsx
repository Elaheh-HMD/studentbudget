import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
const { expenses, error, deleteExpense } = useContext(ExpenseContext);
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet</p>}

      <ul>
        {expenses.map((expense: any) => (
          <li key={expense.id}>
  {expense.title} - {expense.amount} kr
  <button onClick={() => deleteExpense(expense.id)}>
    Delete
  </button>
</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;