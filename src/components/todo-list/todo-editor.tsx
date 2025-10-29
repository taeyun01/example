import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateTodo } from "@/store/todo";
import { useState, type MouseEventHandler } from "react";

const TodoEditor = () => {
  const createTodo = useCreateTodo();
  const [content, setContent] = useState("");

  const handleAddClick = (e: any) => {
    if (content.trim() === "") return;

    e.preventDefault();
    createTodo(content);
    setContent("");
  };

  return (
    <form className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력해주세요 ..."
      />
      <Button onClick={handleAddClick}>추가</Button>
    </form>
  );
};

export default TodoEditor;
