import React, { FC } from 'react';
import { createContext } from 'react';

export interface IUserContext {
  userName: string;
  isLoggedIn: boolean;
}

export const UserContext = createContext<IUserContext>({
  userName: '',
  isLoggedIn: false
});

export const UserContextProvider: FC<IUserContext> = props => {
  return (
    <UserContext.Provider
      value={{ isLoggedIn: props.isLoggedIn, userName: props.userName }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
