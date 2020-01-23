import React, { FC } from 'react';
import styles from './index.module.less';
import BoldenInformation from '../BoldenInformation';
import Subtitle from '../SubTitle';
import Description from '../Description';

export interface IPharseInfo {
  title: string[];
  subtitle?: string[];
  desc?: string[];
  time: string[]
}

interface IProps {
  info: IPharseInfo;
}

const PharseInformation: FC<IProps> = (props: IProps) => {
  const { info } = props;
  return (
    <div className={styles['info-container']}>
      <BoldenInformation informations={info.title} align={'left'} />
      {info.subtitle && (
        <Subtitle informations={info.subtitle} align={'left'} />
      )}
      {info.desc && <Description informations={info.desc} />}
    </div>
  );
};

export default PharseInformation;
