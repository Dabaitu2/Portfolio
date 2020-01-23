import React, { FC } from 'react';
import styles from './index.module.less';

interface IProps {
  informations: string[];
}

const Description: FC<IProps> = (props: IProps) => {
  return (
    <div className={styles['info-container']}>
      {props.informations.map(info => {
        return <div className={styles['info']} key={info}>
          {info}
        </div>;
      })}
    </div>
  );
};

export default Description;
