import * as React from 'react';
import styles from './index.module.less';

const Banner: React.FC<{}> = () => {
  return (
    <div className={styles['banner-container']}>
      <div className={styles['title']}>
        <img
          src="/static/images/profile.jpg"
          alt="my picture"
          className={styles['picture']}
        />
        <div className={styles['name']}>
          <div className={styles['welcome']}>Welcome! I'm</div>
          <div className={styles['actual-name']}>
            <span className={styles['chinese-name']}>LING, XI</span>
            <span className={styles['english-name']}>{` /Lim`}</span>
          </div>
          <div className={styles['who-am-i']}>Designer with Love, Passion and Creativity</div>
        </div>
      </div>
      <div className={styles['metaphor']}>
        “Good design is honest.”
      </div>
    </div>
  );
};

export default Banner;
