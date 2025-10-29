import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export const fetchTodoById = async (id: number) => {
  const response = await fetch(`${API_URL}/todos/${id}`);
  if (!response.ok) throw new Error("Fetch Failed");

  const data: Todo = await response.json();
  return data;
};
