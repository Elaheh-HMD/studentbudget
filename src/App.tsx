import Home from "./pages/Home";
import { ExpenseProvider } from "./context/ExpenseContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ExpenseProvider>
        <Home />
      </ExpenseProvider>
    </ErrorBoundary>
  );
}

export default App;