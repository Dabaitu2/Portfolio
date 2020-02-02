import React, { FC } from 'react';
import styles from './index.module.less';
import LazyLoadImg, { LazyLoadImgProps } from '../../common/LazyLoadImg';
import Router from 'next/router';

export interface ProjectInfoProps {
  images: LazyLoadImgProps[];
  title: string;
  desc: string[];
  tags: string[];
  mainColor: string;
  href: string;
}

type IProps = ProjectInfoProps;

export const ProjectIndexItem: FC<IProps> = (props: IProps) => {
  const { images, title, desc, tags, href } = props;
  return (
    <div
      className={styles['project-index-item']}
      onClick={() => Router.push('/projects/' + href)}
    >
      <div>
        <div className={styles['project-index-title']}>{title}</div>
        <div className={styles['project-index-subtitle']}>
          {desc.map(d => (
            <span>{d}</span>
          ))}
        </div>
        {/*<div>*/}
        {/*  {*/}
        {/*    tags.map(t => (*/}
        {/*      <span>#{t}</span>*/}
        {/*    ))*/}
        {/*  }*/}
        {/*</div>*/}
      </div>
      <div className={styles['project-images']}>
        {images.map(image => (
          <LazyLoadImg {...image} className={styles['project-image']} />
        ))}
      </div>
    </div>
  );
};

export default ProjectIndexItem;
