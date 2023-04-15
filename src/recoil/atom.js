import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "loto-numbers",
  storage: localStorage,
});

export const lotoAtom = atom({
  key: "lotoAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
