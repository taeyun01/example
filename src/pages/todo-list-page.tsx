import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";

const dummyData = [
  {
    id: 1,
    content: "Todo1",
  },
  {
    id: 2,
    content: "Todo2",
  },
  {
    id: 3,
    content: "Todo3",
  },
];
const TodoListPage = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoListPage</h1>
      <TodoEditor />
      {dummyData.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoListPage;
