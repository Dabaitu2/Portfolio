import React, { FC } from 'react';
import styles from './index.module.less';
import LazyLoadImg, { LazyLoadImgProps } from '../../common/LazyLoadImg';

export interface ProjectDetailInfoProps {
  images: LazyLoadImgProps[];
  title: string;
  desc: string[];
  tags: string[];
  details: string;
  mainColor: string;
}

type IProps = ProjectDetailInfoProps;

export const ProjectDetailItem: FC<IProps> = (props: IProps) => {
  const { images, title, desc, tags, details, mainColor } = props;
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
    </div>
  );
};

export default ProjectDetailItem;
