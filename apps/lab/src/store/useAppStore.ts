import { create } from "zustand";

interface IAppStoreState {
  count: number;
  increment: () => void;
}

// 1. create : store를 생성하는 함수
// 2. set : store의 상태를 변경하는 함수
// 3. count: 상태
// 4. increment: 상태를 변경하는 함수
const useAppStore = create<IAppStoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useAppStore;
