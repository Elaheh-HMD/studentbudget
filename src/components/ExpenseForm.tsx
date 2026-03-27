import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import type { Expense } from "../types/Expense";

const ExpenseForm = () => {
  const context = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
const [category, setCategory] = useState("food");
  if (!context) return null;

  const { addExpense } = context;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newExpense: Expense = {
  id: Date.now(),
  title,
  amount: Number(amount),
  category,
};

    addExpense(newExpense);

    setTitle("");
    setAmount("");
  };

  return (
  <form onSubmit={handleSubmit} className="form">
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="food">Food</option>
  <option value="rent">Rent</option>
  <option value="transport">Transport</option>
</select>
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />

    <button type="submit">Add Expense</button>
  </form>
);
};

export default ExpenseForm;