// @ts-ignore
import { analyze } from '../rgbaster';

onmessage = e => {
  if (process.browser) {
    const colors = analyze(e.data);
    if (colors[0]) {
       // @ts-ignore
      postMessage(colors[0].color);
    }
  }
};
