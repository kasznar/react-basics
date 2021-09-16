import React, { FC, useContext } from 'react';
import { TwoWayContext } from '../../Context/TwoWayData/TwoWayContext';

export const TwoWayConsumer: FC<{ num: number }> = ({ num }) => {
  const { userName, setUserName } = useContext(TwoWayContext);

  function handleChange(event) {
    setUserName(event.target.value);
  }

  return (
    <div>
      consumer{num}:
      <br />
      <input value={userName} onChange={handleChange} />
    </div>
  );
};
