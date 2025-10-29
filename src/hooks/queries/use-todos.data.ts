import { fetchTodos } from "@/api/fetch-todos";
import { useQuery } from "@tanstack/react-query";

export const useTodosData = () => {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
    // retry: 2, // 요청 실패시 얼마나 재시도 할 건지
  });
};
