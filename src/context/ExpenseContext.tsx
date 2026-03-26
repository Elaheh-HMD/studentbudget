import { createContext, useState, useEffect } from "react";
import { Expense } from "../types/Expense";
import { fetchExpenses, createExpenseAPI } from "../services/expenseService";
import { 
  fetchExpenses, 
  createExpenseAPI, 
  deleteExpenseAPI 
} from "../services/expenseService";
export const ExpenseContext = createContext<any>(null);

export const ExpenseProvider = ({ children }: any) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const load = async () => {
    try {
      setLoading(true);
      const data = await fetchExpenses();
      setExpenses(data);
    } catch {
      setError("Failed to load expenses");
    } finally {
      setLoading(false);
    }
  };

  load();
}, []);

  const loadExpenses = async () => {
    try {
      setLoading(true);
      const data = await fetchExpenses();
      setExpenses(data);
    } catch {
      setError("Failed to load expenses");
    } finally {
      setLoading(false);
    }
    } catch (err) {
      setError("Could not load expenses");
    }
  };

  const addExpense = async (expense: Expense) => {
    try {
      await createExpenseAPI(expense);
      setExpenses((prev) => [...prev, expense]);
    } catch (err) {
      setError("Could not add expense");
    }
  };
const deleteExpense = async (id: number) => {
  try {
    await deleteExpenseAPI(id);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  } catch {
    setError("Could not delete expense");
  }
};
  return (

  <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, error, loading }}>    
{children} 

    </ExpenseContext.Provider>
  );
