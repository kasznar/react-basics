import React, { useState } from 'react';
import { ApiCall } from '../Hooks/ApiCall';
import { CustomHook } from '../Hooks/CustomHook';
import { UseEffectLifecycle } from '../Hooks/UseEffectLifecycle';
import { UseState } from '../Hooks/UseState';

export const HooksDemo = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Komponens state - hookok</h2>
      <hr/>
      <h3>useState</h3>
      <UseState />

      <h3>useEffect</h3>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && (
        <div>
          <UseEffectLifecycle />
          <ApiCall />
          <CustomHook />
        </div>
      )}
    </div>
  );
};
