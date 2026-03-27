import type { Expense } from "../types/Expense";

export const createExpense = (title: string, amount: number): Expense => {
  return {
  id: Date.now(),
  title,
  amount,
  category: "food", // موقت برای حل ارور
};
};

export const calculateTotal = (expenses: Expense[]): number => {
  return expenses.reduce((sum, exp) => sum + exp.amount, 0);
};