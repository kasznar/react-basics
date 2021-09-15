import React, { FC } from 'react';

export const Slots: FC<{ title: JSX.Element; body: JSX.Element }> = props => {
  return (
    <div>
      title: {props.title}
      <div>my body: {props.body}</div>
    </div>
  );
};
