import React, { FC } from 'react';
import { IExampleProps } from '../helpers';

// props es typeolas
export const FunctionComponentWithProps: FC<IExampleProps> = props => {
  return <span>name: {props.name}</span>;
};
