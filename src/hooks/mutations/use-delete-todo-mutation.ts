import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodoMutation = () => {
  // 캐시데이터를 수정하기 위해 불러옴 (queryClient는 캐기 값들이 들어있는 스토어)
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,

    // 삭제시에는 어떤 방법으로 처리해야할까?
    // 1. 캐시 무효화 -> invalidateQueries
    // 2. 수정 요청의 응답값 활용 -> onSuccess
    // 3. 낙관적 업데이트 -> onMutate
    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];

        return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
      });
    },
  });
};
