import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from '../index.less';
import LayoutHeader from '../../components/LayoutHeader';
import {
  CurrentTabProvider,
  useCurrentTab
} from '../../utils/hooks/useCurrentTab';
import { ContentSwitcher } from '../../components/ContentSwitcher';
import { useComponentDidMount } from '../../utils/hooks/useComponentDidMount';
import { useResizeCallback } from '../../utils/hooks/useResizeCallback';
import ProjectDetailItem, {
  ProjectDetailInfoProps
} from '../../components/Projects/ProjectDetail';
import Profile from '../../components/Profile';
import Projects from '../../components/Projects';
import RhinoStyles from './xixi4rhino.less';

const DESIGN_WIDTH = 1920;
const COMMON_STATIC_PATH = '/static/images/projectDetails/img';
const Info: ProjectDetailInfoProps = {
  title: 'xixi4rhino',
  mainColor: '#9E0601',
  desc: [
    'a website for rhino protection',
    'by impacting potential consumers directly'
  ],
  details: `‘xixi4rhino’ is a website for Rhino Protection, aiming to change Chinese potential consumers’ rhino horns purchase intention and create better Internet information environment about rhino horns. It’s critical to directly impact the consumption intention of Chinese potential consumers and make them abandon the purchase when rhinos are poached for rhino horns. In the Chinese market, as the Internet plays an import role on consumption decision, we created the website with an entrapping name “Rhino Horn Purchase Guide” to induce people to click and browse it. The glitch art video at the beginning contains bloody scene and dialogue box interaction to make potential consumers shocked powerfully. After that, the webpage informs people about the correct knowledge of the rhino horns and encourage them to forward or donate, so that the website could be more widely spread.`,
  tags: ['Society Innovation | Web UI and UX Design | Team Work in 5 weeks | Mar 2018 '],
  images: [
    {
      src: COMMON_STATIC_PATH + '7.jpg',
      sources: [
        {
          src: COMMON_STATIC_PATH + '7.webp',
          type: 'image/webp'
        }
      ],
      preview_src: COMMON_STATIC_PATH + '7-preview.jpg',
      preview_sources: [
        {
          src: COMMON_STATIC_PATH + '7-preview.webp',
          type: 'image/webp'
        }
      ],
      alt: 'rhino'
    }
  ],
  detail_images_meta: {
    dir: '/static/images/projectDetails/xixi4rhino',
    num: 2
  },
  links: [{
    src: 'http://144.34.173.162/foreign-projects/project-rhino/#/',
    desc: 'Click Here To Enter www.xixi4rhino.com',
    className: RhinoStyles['link']
  }],
  affix_image_meta: {
    dir: '/static/images/projectDetails/xixi4rhino',
    num: 5
  }
};
const menuItems = [
  {
    key: 'xixi4rhino',
    label: 'xixi4rhino'
  }
];
const InnerLayout: React.FC<{}> = () => {
  const {
    state: {
      scale: { scale }
    },
    actions: { setScale, setCurrentTab }
  } = useCurrentTab();
  const [isLoading, setIsLoading] = useState(true);
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
  // innerWidth 比 body.offsetWidth 稳定
  const { IsDone } = useComponentDidMount(() => {
    setCurrentTab(1);
    if (window.innerWidth >= 700) {
      const scale = Math.max(
        Math.min(window.innerWidth / DESIGN_WIDTH, 1),
        0.2
      );
      setScale(scale);
    } else {
      fallBackReactive();
    }
    addCallback(() => {
      const scale = Math.max(
        Math.min(window.innerWidth / DESIGN_WIDTH, 1),
        0.2
      );
      document.getElementsByTagName('html')[0].style.fontSize = `${scale}px`;
      window.scrollTo({
        top: 0
      });
      setScale(scale);
    });
  });
  useEffect(() => {
    setIsLoading(true);
    document.getElementsByTagName('html')[0].style.fontSize = `${scale}px`;
    window.scrollTo({
      top: 0
    });
    // 强行将这次setState推迟到下次处理
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, [scale]);
  const { addCallback } = useResizeCallback(fallBackReactive);
  return IsDone && !isLoading ? (
    <div className={styles.layout}>
      <LayoutHeader menuItems={menuItems} />
      <ContentSwitcher>
        <Profile />
        <ProjectDetailItem {...Info} />
        <Projects />
      </ContentSwitcher>
      <LayoutHeader
        menuItems={menuItems}
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
