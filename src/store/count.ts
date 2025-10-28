import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

// combine미들웨어를 이용하면서까지 state와 액션 함수들을 분리해서 스토어를 생성하는 이유는?
// combine을 사용하면 첫번째 인수로 전달한 count:0 이라는 state타입이 자동으로 추론이 되기 때문이다.
// 이전에 create<Store> 이런식으로 사용했었던것 처럼 별도의 타입을 정의해주지 않아도 combine은 첫번째 인수를 기준으로
// 현재 스토어의 타입을 자동으로 추론해주기 때문에 get() 호버하면 자동추론이 되는 걸 볼 수 있다.
// 한 가지 주의할점은 combine은 기본적으로 현재 스토어의 타입을 첫번째 인수로 전달한 state 값만 포함하는 타입으로 추론한다는 것이다.
// 즉, 지금 count값만 포함하는 객체 타입으로 추론이 되는 걸 볼 수 있다.
// 그냥 타입만 추론이 될 뿐이다.
// 그래서 그냥 추론된 타입대로 현재 state의 값만 포함하는 객체 타입이 들어온다 라고 생각해도 무방하다.

//* 미들웨어 순서 중요! 하단 순서대로 하지 않으면 의도치 않은 동작이 발생할 수 있음
export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increase: () => {
                // get();
                set((state) => {
                  state.count += 1;
                });
                // state.count += 1; 원래 이렇게 객체의 특정 속성에 직접 접근해서 값을 바꾸면 안됨
                // 하지만 immer미들웨어를 사용하면 알아서 불변성을 관리해주기 때문에 state를 자동으로 업데이트 시켜줌
              },
              decrease: () => {
                set((state) => {
                  state.count = state.count === 0 ? 0 : (state.count -= 1);
                });
              },
            },
          })),
        ),
      ),
      {
        name: "countStore", // 스토리지에 어떤 이름으로 저장할지
        partialize: (store) => ({
          count: store.count, // 스토어의 count값만 저장
        }),
        // storage의 옵션을 읽어 세션 스토리지에 데이터를 보관
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "countStore", // count의 값을 실시간으로 디버깅할 수 있도록 설정
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  // 구독하고 있는 count값이 변경될 때 마다 실행되는 콜백함수
  (count, prevCount) => {
    // Listener라고 표현
    console.log(count, prevCount); // 현재 값, 이전 값

    // 현재 스토어의 상태를 가져오는 방법
    // const store = useCountStore.getState(); // 현재 카운터의 값을 반환해줌
    // console.log(store.count);

    // 현재 스토어의 상태를 업데이트 하는 방법 (지금은 쓰면 무한루프)
    // useCountStore.setState((store) => ({
    //   count: 10,
    // }));
  },
);

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () =>
//       set((state) => ({
//         count: state.count + 1,
//       })),
//     decrease: () =>
//       set((state) => ({
//         count: state.count === 0 ? 0 : state.count - 1,
//       })),
//   },
// }));

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

//* subscribeWithSelector미들웨어
//* 셀렉터 함수를 통해서 스토어의 특정 값을 구독함으로써
//* 해당 값이 변경될 때 마다 어떠한 기능을 추가로 수행하도록 만들어주는
//* 마치 리액트의 "useEffect" 훅과 비슷한 기능을 수행하는 미들웨어이다.
