import React, { useState } from 'react';
import { SimpleContextConsumer } from '../../Context/SimpleContext/SimpleConsumer';
import { SimpleConsumerHook } from '../../Context/SimpleContext/SimpleConsumerHook';
import { CountContext } from '../../Context/SimpleContext/SimpleContext';

export const SimpleContextProvider = () => {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>add</button>
      <CountContext.Provider value={count}>
        <SimpleContextConsumer />
        <SimpleConsumerHook />
      </CountContext.Provider>
    </div>
  );
};
