import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Expense } from "../types/Expense";

export type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: number) => void;
  error: string | null;
  loading: boolean;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);
export { ExpenseContext };

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {

  // ✅ load مستقیم از localStorage (بدون useEffect)
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  });

  const [error] = useState<string | null>(null);
  const [loading] = useState(false);

  const addExpense = (expense: Expense) => {
    const updated = [...expenses, expense];
    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));
  };

  const deleteExpense = (id: number) => {
    const updated = expenses.filter((e) => e.id !== id);
    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, error, loading }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};