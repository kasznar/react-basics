import React from 'react';
import { CountContext } from '../../Context/SimpleContext/SimpleContext';

export const SimpleContextConsumer = () => {
  return (
    <CountContext.Consumer>
      {value => <div>count: {value}</div>}
    </CountContext.Consumer>
  );
};
