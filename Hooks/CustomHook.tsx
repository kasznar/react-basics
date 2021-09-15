import React, { useEffect, useState } from 'react'
import { mockApiCall } from '../helpers';

// custome hook
const usePrice = () => {
  const [price, setPrice] = useState<number | null>(null);
  useEffect(() => {
    mockApiCall().then(res => {
      setPrice(res.price);
    });
  }, []);

  return [price];
};

export const CustomHook = () => {
  const [price] = usePrice();

  return (
    <div>
      <div>CustomeHook: {price}</div>
    </div>
  );
};