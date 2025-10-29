import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export const useTodosDataById = (id: number) => {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],
    staleTime: 5000, // 보통 실시간 주가, 실시간 채팅 데이터처럼 최신 데이터가 굉장히 빠르게 반영돼야 되는 경우가 아니라면 보통은 너무 과한 데이터 요청을 방지하기 위해서 3~5초로 설정하는게 대부분

    //* 우리가 원하는 타이밍에만 리페칭 할 수 있도록 세부적으로 제어할 수 있음
    // refetchInterval: 3000, // 3초 마다 리패칭, false하면 주기적으로 리페칭x
    // refetchOnMount: false, // 마운트 시점에서 더 이상 이데이터가 stale상태가 되더라도 리패칭이 발생하지 않음
    // 즉, 뒤로갔다가 다시 해당 페이지로 접속했을때 리패칭하지 않고, 이전에 불러왔던 데이터를 그대로 사용
    // refetchOnWindowFocus: false // 다른 탭에 이동했다가 돌아와도 리페칭하지 않도록 함
    // refetchOnReconnect: false // 인터넷 연결이 끊어졌다가 연결됐을때 리페칭하지 않도록 함
  });
};
