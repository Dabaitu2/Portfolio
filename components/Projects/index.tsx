import React, { FC } from 'react';
import Router from 'next/router';
import styles from './index.module.less';

interface IProps {}

const Projects: FC<IProps> = (props: IProps) => {
  return (
    <div className={styles['main']}>
      <h1>Under Construction</h1>
      <h2 onClick={()=>Router.push('/projects/dual-layer-solution')}>Click here to see One of My Project</h2>
    </div>
  );
};

export default Projects;
