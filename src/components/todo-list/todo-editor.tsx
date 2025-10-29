import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

const TodoEditor = () => {
  const { mutate, isPending } = useCreateTodoMutation();
  const [content, setContent] = useState("");

  const handleAddClick = (e: any) => {
    e.preventDefault();
    if (content.trim() === "") return;

    mutate(content);
    setContent("");
  };

  return (
    <form className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력해주세요 ..."
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </form>
  );
};

export default TodoEditor;
