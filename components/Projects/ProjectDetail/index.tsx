import React, { FC, useEffect } from 'react';
import styles from './index.module.less';
import LazyLoadImg, { LazyLoadImgProps } from '../../common/LazyLoadImg';
import { useResizeCallback } from '../../../utils/hooks/useResizeCallback';
import { useForceUpdate } from '../../../utils/hooks/useForceUpdate';
import throttle from 'lodash/throttle';
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
  links?: {
    src: string
    className: string,
    desc: string
  }[]
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
    links,
    tags,
    details,
    mainColor,
    detail_images_meta,
    video,
    affix_image_meta
  } = props;
  const videoRef = React.useRef<any>({
    duration: 0,
    currentTime: 0,
    fake: true
  });
  const [played, setPlayed] = React.useState<boolean | undefined>(undefined);
  const [visible, setVisible] = React.useState<boolean>(false);
  const { forceUpdate } = useForceUpdate();
  const [progress, setProgress] = React.useState<number>(0);
  useEffect(() => {
    if (!videoRef.current.fake && document) {
      document.onscroll = () => {
        if (videoRef.current!.getBoundingClientRect().top < 700) {
          if (played === undefined) {
            videoRef.current.play();
            setPlayed(true);
          }
        } else if (videoRef.current!.getBoundingClientRect().bottom < 150) {
          videoRef.current.pause();
          setPlayed(false);
        }
      };
    }
  }, [videoRef.current, document, played]);
  const { addMustExecuteCallback } = useResizeCallback();
  addMustExecuteCallback(() => {
    forceUpdate();
  });
  useEffect(() => {
    const handleTimeUpdate = throttle(() => {
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    }, 500);
    if (!videoRef.current.fake) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
  }, [videoRef.current, setProgress]);

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
        {details.length > 0 && (
          <span className={styles['project-detail-details-desc']}>
            {details}
          </span>
        )}
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
        {
          links && links.map(link => <a className={link.className} href={link.src} target={'blank'}>{link.desc}</a>)
        }
        {video
          ? video.map(v => {
              return (
                <div
                  style={{
                    width: '1600rem',
                    position: 'relative',
                    height: '900rem',
                    transition: '0.3s ease-in-out',
                    filter: played == true ? 'none' : 'opacity(0.9)'
                  }}
                  onMouseEnter={() => {
                    setVisible(true);
                  }}
                  onMouseLeave={() => {
                    setVisible(false);
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
                    className={styles['project-detail-stop-icon']}
                    style={{
                      display: played == true ? 'none' : 'block'
                    }}
                  >
                    PAUSE
                  </div>
                  <div
                    style={{
                      transition: '.4s ease',
                      opacity: visible ? 1 : 0
                    }}
                    className={styles['project-detail-video-control-bar']}
                  >
                    <div className={styles['bar']}>
                      <div
                        className={styles['progress']}
                        style={{
                          width: progress + '%'
                        }}
                      />
                    </div>
                  </div>
                  <video
                    src={v.src}
                    ref={videoRef}
                    autoPlay={false}
                    style={{
                      width: '1600rem',
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
