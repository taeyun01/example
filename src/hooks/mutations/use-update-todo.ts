import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    // onMutate매개변수에는 체크박스를 클릭했을때 전달되는 id, isDone상태가 제공됨
    onMutate: async (updatedTodo) => {
      //* 낙관적 업데이트 예외상황2 : 과거에 발생한 데이터 조회 요청이 onMutate함수에서 업데이트 해둔 todo list의 캐시 데이터를 과거의 버전으로 다시 덮어씌어버리게 되는 상황
      // cancelQueries메서드는 캐시데이터를 불러오고 있는 데이터 요청이 있다면 그냥 다 취소시켜버림
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.list, // 취소할 키값 (todo.list를 불러오고 있는 데이터 조회 요청들을 다 취소함)
      });

      const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list);

      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return []; // prevTodos가 없다면 기존 데이터가 없다는 것이니 수정할게 없음

        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo,
        );
      });

      return {
        prevTodos,
      };
    },
    //* 낙관적 업데이트 예외상황1 : 비동기 요청이 실패 했을 때 (다시 원상태로 복구 하는 과정)
    // context에는 onMutate에서 반환된 prevTodos가 담겨있음
    onError: (err, variable, context) => {
      if (context && context.prevTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.todo.list,
          context.prevTodos,
        );
      }
    },
    //* 낙관적 업데이트 예외상황3 : 낙관적으로 업데이트한 데이터와 실제 백엔드 서버에 수정된 데이터가 달라질때(데이터 무결성이 깨질 때)
    // 요청이 종요됐을때 호출되는 onSettled
    // 클라이언트는 체크박스가 true인데, 서버에서 예기치 못한상황이 발생하여 false로 업데이트되어 데이터의 무결성이 깨짐
    // 캐시데이터를 무효화 함으로써 데이터의 무결성을 검증하는 과정도 추가
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list, // 무효화할 캐시의 키값
      });
      // 투두리스트 캐시 데이터를 무효화 하고 다시 서버로 부터 불러온 값으로 갱신시켜 주기 때문에
      // 데이터 수정요청이 잘못되었을 경우에도 서버에 저장된 데이터로 자동으로 업데이트 되도록
      // 이렇게 설정해줄 수 있다.
    },
  });
};
