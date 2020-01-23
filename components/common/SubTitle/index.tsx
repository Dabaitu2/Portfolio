import React, { FC } from 'react';
import styles from './index.module.less';

interface IProps {
  informations: string[];
  align: 'left' | 'right' | 'center';
}

const Subtitle: FC<IProps> = (props: IProps) => {
  return (
    <div className={styles['info-container']}>
      {props.informations.map(info => {
        return (
          <div
            key={info}
            className={styles['info']}
            style={{
              textAlign: props.align
            }}
          >
            {info}
          </div>
        );
      })}
    </div>
  );
};

export default Subtitle;
