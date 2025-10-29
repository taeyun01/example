import { Button } from "@/components/ui/button";
import { useDeleteTodo } from "@/store/todo";

const TodoItem = ({ id, content }: { id: number; content: string }) => {
  const deleteTodo = useDeleteTodo();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button onClick={handleDeleteClick} variant="destructive">
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
