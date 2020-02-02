import React, { FC, useRef, useState } from 'react';
import { useComponentDidMount } from '../../../utils/hooks/useComponentDidMount';
// @ts-ignore
import findMainThemeWorker from 'worker-loader?name=static/[hash].worker.js!../../../utils/workers/findMainTheme.worker';
import getData, {analyze} from '../../../utils/rgbaster';

interface IProps {
  src: string;
  preview_src: string;
  alt: string;
}

const AutoBackGroundColorSliderPage: FC<IProps> = (props: IProps) => {
  const { src, alt, preview_src } = props;
  const [backgroundColor, setBackGroundColor] = useState('#e2e2e2');
  useComponentDidMount(() => {
    const img = new Image();
    img.src = preview_src;
    img.onload = () => {
      getData(preview_src)
        .then(value => {
          // worker 不会阻塞渲染
          const worker = new findMainThemeWorker();
          worker.postMessage(value);
          worker.onmessage = e => {
            setBackGroundColor(e.data)
          };
        })
        .catch(err => console.log(err));
    };
  });
  return (
    <div
      className={'section'}
      style={{
        backgroundColor: backgroundColor,
        transition: '0.6s ease-in-out'
      }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default AutoBackGroundColorSliderPage;
