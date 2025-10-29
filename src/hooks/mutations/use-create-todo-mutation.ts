import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 딱 발송되었을 때 사용되는 이벤트 핸들러
    onSettled: () => {}, // 요청이 종료됐을 때 사용되는 이벤트 핸들러
    onSuccess: (newTodo) => {
      // setQueryData를 사용해 Todo가 추가되면 기존 캐시데이터를 직접 수정해 새로운 Todo를 추가하여 데이터 리페칭없이 화면에 렌더링 할 수 있음
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];

        return [...prevTodos, newTodo];
      });
    }, // 요청이 성공했을 때 사용되는 이벤트 핸들러
    onError: (err) => {
      window.alert(`요청 실패: ${err.message}`);
    }, // 요청에 실패했을 때 사용되는 이벤트 핸들러
  });
};
