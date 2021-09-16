import React, { useState } from 'react';
import { TwoWayConsumer } from '../../Context/TwoWayData/TwoWayConsumer';
import { TwoWayContext } from '../../Context/TwoWayData/TwoWayContext';

export const TwoWayProvider = () => {
  const [userName, setUserName] = useState('');

  return (
    <div>
      <p>
        Provider:
        <br />
        userName: {userName}
      </p>

      <TwoWayContext.Provider value={{ userName, setUserName }}>
        <TwoWayConsumer num={1} />
        <TwoWayConsumer num={2} />
      </TwoWayContext.Provider>
    </div>
  );
};
