import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { createExpense } from "../utils/expenseUtils";
import InputField from "./InputField";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense = createExpense(title, Number(amount));
    addExpense(newExpense);

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Title"
        type="text"
        value={title}
        onChange={setTitle}
        required
      />

      <InputField
        label="Amount"
        type="number"
        value={amount}
        onChange={setAmount}
        required
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;