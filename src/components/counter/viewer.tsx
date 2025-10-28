import { useCount, useCountStore } from "@/store/count";

const Viewer = () => {
  // const { count } = useCountStore();
  const count = useCount();

  return <div>{count}</div>;
};

export default Viewer;
