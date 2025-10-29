import { useTodosDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

const TodoDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useTodosDataById(String(id));

  if (isLoading) return <div>로딩중...</div>;
  if (error || !data) return <div>에러...</div>;

  console.log(data);

  return <div>{data.content}</div>;
};

export default TodoDetailPage;
