import React, { FC } from 'react';
import { niceRandom } from '../helpers';

// Handle Events
export const ChildWithEvent: FC<{ onMyClick: (value: number) => void }> = props => {
  function handleClick() {
    props.onMyClick(niceRandom());
  }

  return <button onClick={handleClick}>click event!</button>;
};

export const ReceiveEvent = () => {
  function handleClick(value: number) {
    console.log('I got the event: ' + value);
  }

  return <ChildWithEvent onMyClick={handleClick} />;
};