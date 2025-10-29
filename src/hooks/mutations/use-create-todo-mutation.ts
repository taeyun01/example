import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export const useCreateTodoMutation = () => {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 딱 발송되었을 때 사용되는 이벤트 핸들러
    onSettled: () => {}, // 요청이 종료됐을 때 사용되는 이벤트 핸들러
    onSuccess: () => {
      window.location.reload();
    }, // 요청이 성공했을 때 사용되는 이벤트 핸들러
    onError: (err) => {
      window.alert(`요청 실패: ${err.message}`);
    }, // 요청에 실패했을 때 사용되는 이벤트 핸들러
  });
};
