import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";

interface Expense {
  id: string;
  description: string;
  amount: number;
}

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Load från localStorage
  useEffect(() => {
    const data = localStorage.getItem("expenses");
    if (data) {
      setExpenses(JSON.parse(data));
    }
  }, []);

  // Save till localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h2>Hem</h2>
      <ExpenseForm addExpense={addExpense} />
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
            {exp.description} - {exp.amount} SEK
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;