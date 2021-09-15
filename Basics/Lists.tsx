import React from 'react';

// listak
export const List = () => {
  const myList = ['alma', 'korte', 'cseresznye', 'egeszsegunkre'];

  return (
    <div>
      {myList.map(item => (
        <span key={item}>{item}, </span>
      ))}
    </div>
  );
};

export const List2 = () => {
  const myList = ['alma', 'korte', 'cseresznye', 'egeszsegunkre'];
  let children: JSX.Element[] = [];

  myList.forEach(item => {
    children.push(<span key={item}>{item}, </span>);
  });

  // JSX nelkul: return createElement('div', null, children);
  return <div>{children}</div>;
};
