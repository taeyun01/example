import Controller from "@/components/counter/controller";
import Viewer from "@/components/counter/viewer";

const CounterPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <Viewer />
      <Controller />
    </div>
  );
};

export default CounterPage;
