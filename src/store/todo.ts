import type { Todo } from "@/types";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState: {
  todos: Todo[];
} = {
  todos: [],
};

const useTodosStore = create(
  // persist(
  immer(
    combine(initialState, (set) => ({
      actions: {
        createTodo: (content: string) => {
          set((state) => {
            state.todos.push({
              id: new Date().getTime(),
              content: content,
            });
          });
        },
        deleteTodo: (targetId: number) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== targetId);
          });
        },
      },
    })),
  ),
  // {
  //   name: "todoStore", // 스토리지에 어떤 이름으로 저장할지
  //   partialize: (store) => ({
  //     todos: store.todos, // 스토어의 todos값만 저장 (삭제되면 알아서 삭제됨)
  //   }),
  //   // storage의 옵션을 읽어 세션 스토리지에 데이터를 보관
  //   // storage: createJSONStorage(() => sessionStorage),
  // },
  // ),
);

// 스토어의 todos만 반환하는 훅
export const useTodos = () => {
  const todos = useTodosStore((store) => store.todos);
  return todos;
};

// 스토어의 createTodo 함수를 반환하는 훅
export const useCreateTodo = () => {
  const createTodo = useTodosStore((store) => store.actions.createTodo);
  return createTodo;
};

// 스토어의 deleteTodo 함수를 반환하는 훅
export const useDeleteTodo = () => {
  const deleteTodo = useTodosStore((store) => store.actions.deleteTodo);
  return deleteTodo;
};
