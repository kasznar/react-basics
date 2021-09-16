import React, { useContext } from 'react';
import { CountContext } from '../../Context/SimpleContext/SimpleContext';

export const SimpleConsumerHook = () => {
  const count = useContext(CountContext);

  return <div>count: {count}</div>;
};
