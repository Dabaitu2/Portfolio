import React, { FC, useEffect } from 'react';
import styles from './index.module.less';
import LazyLoadImg, { LazyLoadImgProps } from '../../common/LazyLoadImg';
import { useComponentDidMount } from '../../../utils/hooks/useComponentDidMount';

export interface ProjectDetailInfoProps {
  images: LazyLoadImgProps[];
  title: string;
  desc: string[];
  tags: string[];
  details: string;
  mainColor: string;
  detail_images_meta: {
    dir: string;
    num: number;
  };
  video?: [
    {
      src: string;
    }
  ];
  affix_image_meta?: {
    dir: string;
    num: number;
  };
}

type IProps = ProjectDetailInfoProps;

export const ProjectDetailItem: FC<IProps> = (props: IProps) => {
  const {
    images,
    title,
    desc,
    tags,
    details,
    mainColor,
    detail_images_meta,
    video,
    affix_image_meta
  } = props;
  const videoRef = React.useRef<any>();
  const [played, setPlayed] = React.useState<boolean | undefined>(undefined);
  useEffect(() => {
    if (videoRef.current && document) {
      document.onscroll = () => {
        if (videoRef.current.getBoundingClientRect().top < 700) {
          if (played === undefined) {
            videoRef.current.play();
            setPlayed(true);
          }
        } else if (videoRef.current.getBoundingClientRect().bottom < 150) {
          videoRef.current.pause();
          setPlayed(false);
        }
      };
    }
  }, [videoRef, document, played]);
  return (
    <div
      className={styles['project-detail-item']}
      style={{
        color: mainColor
      }}
    >
      <div className={styles['project-detail-images']}>
        {images.map(image => (
          <LazyLoadImg {...image} className={styles['project-detail-image']} />
        ))}
      </div>
      <div>
        <div className={styles['project-detail-title']}>{title}</div>
        <div className={styles['project-detail-subtitle']}>
          {desc.map(d => (
            <span>{d}</span>
          ))}
        </div>
      </div>
      <div
        className={styles['project-detail-details']}
        style={{
          backgroundColor: mainColor
        }}
      >
        <div className={styles['project-detail-tags']}>
          {tags.map(t => (
            <span>{t}</span>
          ))}
        </div>
        <span>{details}</span>
      </div>
      <div
        style={{
          fontSize: 0
        }}
      >
        {Array.from({ length: detail_images_meta.num }).map((_, i) => {
          if (i === 0) {
            return;
          }
          const common_file = detail_images_meta.dir + '/' + (i + 1).toString();
          return (
            <LazyLoadImg
              src={common_file + '.jpg'}
              sources={[
                {
                  type: 'image/webp',
                  src: common_file + '.webp'
                }
              ]}
              preview_src={common_file + '-preview.jpg'}
              preview_sources={[
                { type: 'image/webp', src: common_file + '-preview.webp' }
              ]}
              className={styles['project-detail-details-images']}
            />
          );
        })}
        {video
          ? video.map(v => {
              return (
                <div
                  style={{
                    width: '1600rem',
                    position: 'relative'
                  }}
                  onClick={() => {
                    if (played) {
                      videoRef.current.pause();
                      setPlayed(false);
                    } else {
                      videoRef.current.play();
                      setPlayed(true);
                    }
                  }}
                >
                  <div
                    style={{
                      letterSpacing: '30rem',
                      fontFamily: 'Sofia Pro Regular',
                      fontSize: '100rem',
                      lineHeight: '900rem',
                      textAlign: 'center',
                      overflow: 'hidden',
                      color: '#fff',
                      position: 'absolute',
                      width: '100%',
                      display: played == true ? 'none' : 'block'
                    }}
                  >
                    PAUSE
                  </div>
                  <video
                    src={v.src}
                    ref={videoRef}
                    autoPlay={false}
                    style={{
                      width: '100%',
                      float: 'left'
                    }}
                  />
                </div>
              );
            })
          : null}
        {affix_image_meta
          ? Array.from({ length: affix_image_meta.num }).map((_, i) => {
              if (i === 0) {
                return;
              }
              const common_file =
                affix_image_meta.dir +
                '/' +
                (detail_images_meta.num + i + 1).toString();
              return (
                <LazyLoadImg
                  src={common_file + '.jpg'}
                  sources={[
                    {
                      type: 'image/webp',
                      src: common_file + '.webp'
                    }
                  ]}
                  preview_src={common_file + '-preview.jpg'}
                  preview_sources={[
                    { type: 'image/webp', src: common_file + '-preview.webp' }
                  ]}
                  className={styles['project-detail-details-images']}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ProjectDetailItem;
