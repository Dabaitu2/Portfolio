import { getCounts, getImageData } from './helper';

interface Opts {
  ignore?: string[];
  scale?: number;
  skipTransparentPixels?: boolean;
}

const defaultOpts: Opts = {
  ignore: [],
  scale: 1
};

export default async function(
  src: string,
  opts: Opts = defaultOpts
): Promise<Uint8ClampedArray> {
  opts = { ...defaultOpts, ...opts };

  const {
    ignore, // for example, to ignore white and black:  [ 'rgb(0,0,0)', 'rgb(255,255,255)' ]
    scale // 0 = best performance, lowest fidelity
    // 1 = best fidelity, worst performance
  } = opts;

  if (scale > 1 || scale <= 0) {
    console.warn(
      `You set scale to ${scale}, which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)`
    );
  }

  return await getImageData(src, scale);
}

export const analyze = (
  data: Uint8ClampedArray
): { color: string; count: number }[] => {
  return getCounts(data, []);
};
