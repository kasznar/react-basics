import React, { FC } from 'react';

// conditional rendering
export const ConditionalRendering: FC<{ checked: boolean }> = props => {
  function text() {
    if (props.checked) {
      return <span>egyik</span>;
    } else {
      return <span>masik</span>;
    }
  }

  return (
    <div>
      {props.checked && <span>visible</span>}
      <br />
      {props.checked ? <b>checked</b> : 'not checked'}
      <br />
      {text()}
    </div>
  );
};
