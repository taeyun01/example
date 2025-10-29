export const API_URL = "http://localhost:3000";

// 쿼리키를 관리 하는 방식 Query Key Factory라고 불림
export const QUERY_KEYS = {
  todo: {
    all: ["todo"], // - todo에 관련된 모든 캐시 데이터를 무효화
    list: ["todo", "list"], // - todo list의 캐시 데이터만 무효화
    detail: (id: string) => ["todo", "detail", id], // - 특정 id의 todo데이터만 무효화
  },
};
