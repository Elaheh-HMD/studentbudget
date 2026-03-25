import { useState } from "react";

interface Expense {
  id: string;
  description: string;
  amount: number;
}

interface Props {
  addExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<Props> = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newExpense: Expense = {
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
    };

    addExpense(newExpense);

    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Beskrivning"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Belopp"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Lägg till utgift</button>
    </form>
  );
};

export default ExpenseForm;