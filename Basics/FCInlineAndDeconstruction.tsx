import React, { FC } from 'react';

const array = ['alma', 'korte'];
const [a, b] = array;

console.log(a); // 'alma'
console.log(b); // 'korte'

const obj = { alma: 'alma', korte: 'korte' };
const { alma, korte } = obj;

// todo: deconstruct: object es tomb
// inline tipus es dekonstrukcio
export const FCInlineAndDeconstruction: FC<{ name: string; age: number }> = ({
  name,
  age
}) => {
  return (
    <span>
      name: {name} age: {age}
    </span>
  );
};
