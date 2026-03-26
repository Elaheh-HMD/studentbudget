type Props = {
  expense: {
    id: number;
    title: string;
    amount: number;
  };
  onDelete: (id: number) => void;
};

function ExpenseItem({ expense, onDelete }: Props) {
  return (
    <li>
      {expense.title} - {expense.amount} kr
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;