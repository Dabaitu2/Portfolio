import * as React from 'react';
import styles from './index.module.less';
import BoldenInformation from '../../common/BoldenInformation';
const emailAndPhone = ['+86 15801795037', 'ccceline.xiii@gmail.com'];
const address = [
  'College of Design and Innovation, Tongji University',
  'No.1239 Siping Rd, Shanghai, China, 200092'
];

const Contact: React.FC<{}> = () => {
  return (
    <div className={styles['contact-container']}>
      <BoldenInformation informations={emailAndPhone} align={'left'} />
      <BoldenInformation informations={address} align={'right'} />
    </div>
  );
};

export default Contact;
