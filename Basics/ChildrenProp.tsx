import React, { FC } from 'react';

export const ChildrenProp: FC = props => {
  return (
    <p>
      this is my children:
      <br />
      {props.children}
    </p>
  );
};
