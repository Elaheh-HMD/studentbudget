import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className="container">
      <h1>Student Budget</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;