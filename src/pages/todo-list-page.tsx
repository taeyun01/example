import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/use-todos.data";

const TodoListPage = () => {
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>에러 발생</div>;
  if (isLoading) return <div>로딩중..</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoListPage</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoListPage;
