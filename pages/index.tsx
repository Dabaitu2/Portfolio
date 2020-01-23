import * as React from 'react';
import styles from './index.less';
import LayoutHeader from '../components/LayoutHeader';
import Profile from '../components/Profile';
import { CurrentTabProvider } from '../utils/hooks/useCurrentTab';
import Projects from '../components/Projects';
import { ContentSwitcher } from '../components/ContentSwitcher';

const Layout: React.FC<{}> = () => {
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
