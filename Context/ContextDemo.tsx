import React from 'react';
import { ScopeDemo } from '../Context/Scope/ScopeDemo';
import { SimpleContextProvider } from '../Context/SimpleContext/SimpleProvider';
import { TwoWayProvider } from '../Context/TwoWayData/TwoWayProvider';

export const ContextDemo = () => {
  return (
    <div>
      <h2>Context API</h2>
      <hr />
      <h3>Simple context</h3>
      <SimpleContextProvider />
      <h3>Two way context</h3>
      <TwoWayProvider />
      <h3>Scope</h3>
      <ScopeDemo />
    </div>
  );
};
