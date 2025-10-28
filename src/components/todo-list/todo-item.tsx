import { Button } from "@/components/ui/button";

const TodoItem = ({ id, content }: { id: number; content: string }) => {
  return (
    <div className="flex items-center justify-between border p-2">
      {content}test
      <Button variant="destructive">삭제</Button>
    </div>
  );
};

export default TodoItem;
