import * as React from 'react';
import styles from '../index.less';
import LayoutHeader from '../../components/LayoutHeader';
import {
  useCurrentTab,
  CurrentTabProvider
} from '../../utils/hooks/useCurrentTab';
import { ContentSwitcher } from '../../components/ContentSwitcher';
import { useComponentDidMount } from '../../utils/hooks/useComponentDidMount';
import { useEffect, useState } from 'react';
import { useResizeCallback } from '../../utils/hooks/useResizeCallback';
import ProjectDetailItem, {
  ProjectDetailInfoProps
} from '../../components/Projects/ProjectDetail';
import Profile from '../../components/Profile';
import Projects from '../../components/Projects';
const DESIGN_WIDTH = 1920;
const COMMON_STATIC_PATH = '/static/images/projectDetails/img';
const Info: ProjectDetailInfoProps = {
  title: 'Flyro',
  desc: ['an inspiring spinning and', 'a mobile free zone'],
  mainColor: '#1F204F',
  details:
    'To create a phone free zone, we offer you the optimal choice — flyro.It is a floating gyro, which can block and charge your phone.\n' +
    'Once you plug in the phone, the gyro can be empowered and spin during your working time. If you plug out from the plate, it would lose power and stop after 15 minutes.\n' +
    'Flyro helps you find the balance between work and play.',
  tags: ['Integrated Product Development | Interaction Design | Team Work in 5 weeks | May 2018 '],
  images: [
    {
      src: COMMON_STATIC_PATH + '3.jpg',
      sources: [
        {
          src: COMMON_STATIC_PATH + '3.webp',
          type: 'image/webp'
        }
      ],
      preview_src: COMMON_STATIC_PATH + '3-preview.jpg',
      preview_sources: [
        {
          src: COMMON_STATIC_PATH + '3-preview.webp',
          type: 'image/webp'
        }
      ],
      alt: 'Flyro'
    }
  ],
  detail_images_meta: {
    dir: '/static/images/projectDetails/flyro',
    num: 11
  },
  video: [{
    src: '/static/videos/flyro.mp4'
  }],
  affix_image_meta: {
    dir: '/static/images/projectDetails/flyro',
    num: 9
  }
};
const menuItems = [
  {
    key: 'Flyro',
    label: 'Flyro'
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
