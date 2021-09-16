import { useContext } from 'react';
import { UserContext } from '../../Context/Scope/WrappedContext';

import React from 'react';

export const Consumer = () => {
  const { userName, isLoggedIn } = useContext(UserContext);

  return (
    <div>
      {userName} is {!isLoggedIn && 'not'} logged in
    </div>
  );
};
