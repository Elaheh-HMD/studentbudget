import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const [filter, setFilter] = useState("all");
  const context = useContext(ExpenseContext);

  if (!context) return null;

  const { expenses, deleteExpense } = context;

  if (expenses.length === 0) {
    return <p style={{ textAlign: "center" }}>No expenses yet</p>;
  }
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
const filteredExpenses =
  filter === "all"
    ? expenses
    : expenses.filter((e) => e.category === filter);
return (
  <div>
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="food">Food</option>
      <option value="rent">Rent</option>
      <option value="transport">Transport</option>
    </select>
    <ul>
      {filteredExpenses.map((e) => (
        <li key={e.id}>
{e.title} ({e.category}) - {e.amount} kr
            <button onClick={() => deleteExpense(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "center" }}>Total: {total} kr</p>
    </div>
  );
};

export default ExpenseList;