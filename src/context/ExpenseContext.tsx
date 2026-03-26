import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Expense } from "../types/Expense";
import {
  fetchExpenses,
  createExpenseAPI,
  deleteExpenseAPI,
} from "../services/expenseService";

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: number) => void;
  error: string | null;
  loading: boolean;
};

export const ExpenseContext = createContext({} as ExpenseContextType);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
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

  const addExpense = async (expense: Expense) => {
    try {
      const newExpense = await createExpenseAPI(expense);
      setExpenses((prev: Expense[]) => [...prev, newExpense]);
    } catch {
      setError("Could not add expense");
    }
  };

  const deleteExpense = async (id: number) => {
    try {
      await deleteExpenseAPI(id);
      setExpenses((prev: Expense[]) =>
        prev.filter((e: Expense) => e.id !== id)
      );
    } catch {
      setError("Could not delete expense");
    }
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, error, loading }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};