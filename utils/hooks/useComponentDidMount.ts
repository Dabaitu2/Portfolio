import { useEffect, useState } from 'react';

export const useComponentDidMount = (
  handler: () => any,
  postHandler?: () => any
) => {
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [IsDone, setIsDone] = useState(false);
  useEffect(() => {
    if (!firstLoaded) {
      setFirstLoaded(true);
    }
  }, []);
  useEffect(() => {
    if (firstLoaded) {
      handler();
      setIsDone(true);
      return postHandler ? () => postHandler() : () => null;
    }
    return;
  }, [firstLoaded]);
  return { firstLoaded, IsDone, setIsDone };
};
