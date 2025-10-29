import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export const createTodo = async (content: string) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({
      // id, // db.json에 자동으로 생성됨
      content,
      isDone: false,
    }),
  });

  if (!response.ok) throw new Error("Create Todo Failed");

  const data: Todo = await response.json();
  return data;
};
