import { Expense } from "../types/Expense";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// GET
export const fetchExpenses = async (): Promise<Expense[]> => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data.slice(0, 5).map((item: any) => ({
      id: item.id,
      title: item.title,
      amount: Math.floor(Math.random() * 100),
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// POST
export const createExpenseAPI = async (expense: Expense) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create expense");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// DELETE
export const deleteExpenseAPI = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete expense");
    }

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// PUT (update)
export const updateExpenseAPI = async (expense: Expense) => {
  try {
    const res = await fetch(`${BASE_URL}/${expense.id}`, {
      method: "PUT",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to update expense");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};