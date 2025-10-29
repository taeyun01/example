import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 딱 발송되었을 때 사용되는 이벤트 핸들러
    onSettled: () => {}, // 요청이 종료됐을 때 사용되는 이벤트 핸들러
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
    }, // 요청이 성공했을 때 사용되는 이벤트 핸들러
    onError: (err) => {
      window.alert(`요청 실패: ${err.message}`);
    }, // 요청에 실패했을 때 사용되는 이벤트 핸들러
  });
};
