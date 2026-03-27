import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function Summary() {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error("Must use inside provider");
  }

  const { expenses } = context;

  const total = 13156; // CSN
  const spent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = total - spent;

  return (
    <div>
      <h2>Budget</h2>
      <p>Total: {total} kr</p>
      <p>Spent: {spent} kr</p>
      <p>Remaining: {remaining} kr</p>
    </div>
  );
}

export default Summary;