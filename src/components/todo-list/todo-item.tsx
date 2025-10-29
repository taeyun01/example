import { Button } from "@/components/ui/button";
import { useDeleteTodo } from "@/store/todo";
import { Link } from "react-router";

const TodoItem = ({ id, content }: { id: string; content: string }) => {
  const deleteTodo = useDeleteTodo();

  const handleDeleteClick = () => {
    deleteTodo(Number(id));
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <Link to={`/todolist/${id}`}>{content}</Link>
      <Button onClick={handleDeleteClick} variant="destructive">
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
