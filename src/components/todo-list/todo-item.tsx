import { Button } from "@/components/ui/button";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo";
import type { Todo } from "@/types";
import { Link } from "react-router";

const TodoItem = ({ id, content, isDone }: Todo) => {
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();

  const { mutate: updateTodo } = useUpdateTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-4">
        <input
          disabled={isDeleteTodoPending}
          onClick={handleCheckboxClick}
          type="checkbox"
          checked={isDone}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeleteTodoPending}
        onClick={handleDeleteClick}
        variant="destructive"
      >
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
