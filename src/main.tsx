import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  // 전역적으로 기본값 설정
  defaultOptions: {
    queries: {
      staleTime: 0, // useQuery로 관리되는 모든 캐시데이터는 0으로 설정
      gcTime: 5 * 60 * 1000, // 5분 설정

      refetchOnMount: true, // 마운트 시점에서 데이터가 stale상태가 되도 리패칭 처리
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
