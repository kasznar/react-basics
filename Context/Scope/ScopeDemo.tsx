import React from 'react';
import { Consumer } from '../../Context/Scope/Consumer';
import { UserContextProvider } from '../../Context/Scope/WrappedContext';

export const ScopeDemo = () => {
  return (
    <div>
      <h3>Context scope</h3>
      <UserContextProvider userName="Bela" isLoggedIn={true}>
        <Consumer />
      </UserContextProvider>
      <UserContextProvider userName="Andras" isLoggedIn={false}>
        <Consumer />
      </UserContextProvider>
    </div>
  );
};
