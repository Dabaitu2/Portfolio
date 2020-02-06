import { useState } from 'react';

export const useForceUpdate = (fallBackHandler?: () => any) => {
  const [_, setUpdate] = useState(true);
  const forceUpdate = () => {
    setUpdate(!_);
  };
  return { forceUpdate };
};
