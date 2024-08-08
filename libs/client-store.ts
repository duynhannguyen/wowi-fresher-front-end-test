import { create } from "zustand";

type State = {
  accessToken: string;
  user: {
    email: string;
    name: string | null;
    id: string;
  };
};

type Action = {
  storeAccessToken: (token: State["accessToken"]) => void;
  storeUserInfo: (info: State["user"]) => void;
  signOut: () => void;
};

export const useTokenStore = create<State & Action>((set) => ({
  accessToken: "",
  user: {
    email: "",
    name: "",
    id: "",
  },
  storeUserInfo: (info) => {
    set(() => ({
      user: info,
    }));
  },
  storeAccessToken: (token) =>
    set(() => ({
      accessToken: token,
    })),
  signOut: () =>
    set(() => ({
      accessToken: "",
      user: {
        email: "",
        name: "",
        id: "",
      },
    })),
}));
