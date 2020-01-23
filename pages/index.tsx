import * as React from 'react';
import styles from './index.less';
import LayoutHeader from '../components/LayoutHeader';
import Profile from '../components/Profile';
import {
  CurrentTabProvider,
  useCurrentTab
} from '../utils/hooks/useCurrentTab';
import Projects from '../components/Projects';
import { ContentSwitcher } from '../components/ContentSwitcher';
import { useComponentDidMount } from '../utils/hooks/useComponentDidMount';
import { useEffect } from 'react';
import { useResizeCallback } from '../utils/hooks/useResizeCallback';
const DESIGN_WIDTH = 1920;
const InnerLayout: React.FC<{}> = () => {
  const {
    state: {
      scale: { scale }
    },
    actions: { setScale }
  } = useCurrentTab();
  const fallBackReactive = () => {
    setScale(1);
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
  };
  const { IsDone } = useComponentDidMount(() => {
    if (window.innerWidth >= 700) {
      const scale = Math.min(document.body.clientWidth / DESIGN_WIDTH, 1);
      setScale(scale);
    } else {
      fallBackReactive();
    }
    addCallback(() => {
      const scale = Math.min(document.body.clientWidth / DESIGN_WIDTH, 1);
      document.getElementsByTagName('html')[0].style.fontSize = `${scale}px`;
      window.scrollTo({
        top: 0
      });
      setScale(scale);
    });
  });
  useEffect(() => {
    document.getElementsByTagName('html')[0].style.fontSize = `${scale}px`;
    window.scrollTo({
      top: 0
    });
  }, [scale]);
  const { addCallback } = useResizeCallback(fallBackReactive);
  return IsDone ? (
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
          marginTop: '138rem'
        }}
      />
    </div>
  ) : null;
};

const Layout: React.FC<{}> = () => {
  return (
    <CurrentTabProvider>
      <InnerLayout />
    </CurrentTabProvider>
  );
};

export default Layout;
