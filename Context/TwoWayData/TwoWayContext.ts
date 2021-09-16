import { createContext } from 'react';

export interface ITwoWayContext {
  userName: string;
  setUserName: (value: string) => void;
}

export const TwoWayContext = createContext<ITwoWayContext>({
  userName: '',
  setUserName: () => {}
});
