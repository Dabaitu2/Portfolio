import * as React from 'react';
import styles from './index.less';
import LayoutHeader from '../components/LayoutHeader';
import Profile from '../components/Profile';
import { CurrentTabProvider } from '../utils/hooks/useCurrentTab';
import Projects from '../components/Projects';
import { ContentSwitcher } from '../components/ContentSwitcher';
import { useEffect, useRef, useState } from 'react';

const Layout: React.FC<{}> = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const scale = Math.min(document.body.clientWidth / 1920, 1);
    let metaEl = document.querySelector('meta[name="viewport"]');
    if (!metaEl) {
      metaEl = document.createElement('meta');
      metaEl.setAttribute('name', 'viewport');
      metaEl.setAttribute(
        'content',
        'width=device-width, initial-scale=' +
          scale +
          ', maximum-scale=' +
          scale +
          ', minimum-scale=' +
          scale +
          ', user-scalable=no'
      );
      document.documentElement.firstElementChild.appendChild(metaEl);
    } else {
      metaEl.setAttribute(
        'content',
        'width=device-width, initial-scale=' +
          scale +
          ', maximum-scale=' +
          scale +
          ', minimum-scale=' +
          scale +
          ', user-scalable=no'
      );
    }

    window.scrollTo({
      top: 0
    });
  }, [containerRef.current]);
  return (
    <CurrentTabProvider>
      <div className={styles.layout}>
        <LayoutHeader />
        <ContentSwitcher>
          <>
            <Profile />
            <Projects />
          </>
        </ContentSwitcher>
        <LayoutHeader
          bodyStyle={{
            marginTop: '138px'
          }}
        />
      </div>
    </CurrentTabProvider>
  );
};

export default Layout;
