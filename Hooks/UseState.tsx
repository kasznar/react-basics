import React, { useState } from 'react';

export const UseState = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      Count {count}
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
