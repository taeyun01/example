import { Button } from "@/components/ui/button";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo";
import type { Todo } from "@/types";
import { Link } from "react-router";

const TodoItem = ({ id, content, isDone }: Todo) => {
  const { mutate } = useUpdateTodoMutation();

  const handleDeleteClick = () => {};
  const handleCheckboxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-4">
        <input onClick={handleCheckboxClick} type="checkbox" checked={isDone} />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button onClick={handleDeleteClick} variant="destructive">
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
