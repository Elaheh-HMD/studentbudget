import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext<any>(null);

export const ExpenseProvider = ({ children }: any) => {
  const [expenses, setExpenses] = useState<any[]>([]);

  // load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("expenses");
    if (data) {
      setExpenses(JSON.parse(data));
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: any) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};