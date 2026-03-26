import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error("ExpenseContext must be used inside Provider");
  }

  const { expenses, error, deleteExpense, loading } = context;

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