import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { calculateTotal } from "../utils/expenseUtils";

function Summary() {
  const { expenses } = useContext(ExpenseContext);

  const total = calculateTotal(expenses);

  return (
    <div>
      <h2>Total: {total} kr</h2>
    </div>
  );
}

export default Summary;