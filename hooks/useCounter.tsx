import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((currentValue) => currentValue + 1);
  };

  const decrease = () => {
    setCounter((currentValue) => currentValue - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return {
    counter,
    increase,
    decrease,
    resetCounter,
  };
};