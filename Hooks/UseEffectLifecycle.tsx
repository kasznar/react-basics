import React, { useEffect } from 'react';

export const UseEffectLifecycle = () => {
  useEffect(() => {
    console.log('oninit');

    return () => {
      console.log('destroyed');
    };
  }, []);

  return <div>with lifecycle</div>;
};
