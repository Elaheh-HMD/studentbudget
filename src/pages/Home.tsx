import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Summary from "../components/Summary";

function Home() {
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h1>StudentBudget</h1>

      <Summary />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default Home;