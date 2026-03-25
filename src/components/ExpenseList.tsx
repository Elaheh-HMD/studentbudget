import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet</p>}

      <ul>
        {expenses.map((expense: any) => (
          <li key={expense.id}>
            {expense.title} - {expense.amount} kr
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;