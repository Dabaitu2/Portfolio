import { useComponentDidMount } from './useComponentDidMount';
import throttle from 'lodash/throttle';
let callback_queue = [];
export const useResizeCallback = (fallBackHandler?: () => any) => {
  useComponentDidMount(() => {
    window.onresize = throttle(
      e => {
        const width = e.target.innerWidth;
        if (width < 768) {
          fallBackHandler && fallBackHandler();
          return;
        }
        callback_queue.forEach(callback => {
          callback();
        });
      },
      800,
      {
        trailing: true
      }
    );
  });

  function addCallback(callback) {
    callback_queue.push(callback);
  }
  return { addCallback };
};
