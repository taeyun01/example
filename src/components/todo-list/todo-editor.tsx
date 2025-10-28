import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TodoEditor = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="새로운 할 일을 입력해주세요 ..." />
      <Button>추가</Button>
    </div>
  );
};

export default TodoEditor;
