import * as React from 'react';
import styles from './index.module.less';
import BoldenInformation from '../../common/BoldenInformation';
import PharseInformation, { IPharseInfo } from '../../common/PharseInformation';

interface IProps {
  info: IPharseInfo[];
  title?: string;
  bottomGap?: string;
}
const Phrase: React.FC<IProps> = props => {
  const { info, title, bottomGap } = props;
  return (
    <div className={styles['main']}>
      {title && <div className={styles['pharse-title']}>{title}</div>}
      <div className={styles['pharse-main-body']}>
        {info.map(i => (
          <div
            key={i.title[0]}
            className={styles['pharse-container']}
            style={{
              marginBottom: bottomGap ?? '58px'
            }}
          >
            <PharseInformation info={i} />
            <BoldenInformation informations={i.time} align={'right'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phrase;
