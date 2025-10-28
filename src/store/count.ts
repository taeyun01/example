import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
    increase: () =>
      set((state) => ({
        count: state.count + 1,
      })),
    decrease: () =>
      set((state) => ({
        count: state.count === 0 ? 0 : state.count - 1,
      })),
  },
}));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
