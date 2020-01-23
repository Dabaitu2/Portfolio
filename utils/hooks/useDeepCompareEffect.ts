import { useRef, useEffect } from 'react';
import isEqual from 'lodash/isEqual';

export function useDeepCompareEffect<T>(fn, deps: T) {
  let renderRef = useRef<number | any>(0);
  let depsRef = useRef<T>(deps);
  if (isEqual(deps, depsRef.current)) {
    renderRef.current++;
  }
  depsRef.current = deps;
  return useEffect(fn, [renderRef.current]);
}
