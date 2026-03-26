import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { calculateTotal } from "../utils/expenseUtils";

function Summary() {
  const context = useContext(ExpenseContext);
  const { expenses } = context || { expenses: [] };

  const total = calculateTotal(expenses);

  return (
    <div>
      <h2>Total: {total} kr</h2>
    </div>
  );
}

export default Summary;