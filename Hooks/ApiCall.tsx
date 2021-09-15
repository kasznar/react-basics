import React, { useEffect, useState } from 'react';
import { mockApiCall } from '../helpers';

// todo hogyan cancel???
export const ApiCall = () => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    mockApiCall().then(res => {
      setPrice(res.price);
    });
  }, []);

  return (
    <div>
      <div>ApiCall: {price}</div>
    </div>
  );
};
