import React, { FC, useState } from 'react';

export interface ISources {
  src: string;
  type: string;
}
export interface LazyLoadImgProps {
  sources?: ISources[];
  preview_sources?: ISources[];
  src: string;
  preview_src: string;
  alt?: string;
  className?: string;
}

type IProps = LazyLoadImgProps;

const LazyLoadImg: FC<IProps> = (props: IProps) => {
  const { className, src, sources, alt, preview_src, preview_sources } = props;
  const [isDone, setIsDone] = useState(false);

  return (
    <div>
      {/*Picture 用来处理多格式*/}
      <picture>
        {(preview_sources ?? []).map(s => (
          <source srcSet={s.src} type={s.type} />
        ))}
        <img
          src={preview_src}
          alt={'preview'}
          className={className}
          style={{
            display: isDone ? 'none' : 'show',
            filter: 'blur(3px)'
          }}
        />
      </picture>
      <picture>
        {(sources ?? []).map(s => (
          <source srcSet={s.src} type={s.type} />
        ))}
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            display: isDone ? 'initial' : 'none'
          }}
          onLoad={() => {
            setIsDone(true);
          }}
        />
      </picture>
    </div>
  );
};

export default LazyLoadImg;
