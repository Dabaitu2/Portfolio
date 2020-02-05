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
  title: 'Bamboo Stool',
  desc: ['an exploration of bamboo craft', 'in modern aesthetic'],
  tags: ['Stool Design | Bamboo Craft | Personal Work in 4 weeks | Dec 2016 '],
  mainColor: '#587C62',
  details:
    'Bamboo Stool is composed of three groups of repeating raw bamboo strips, exploring the aesthetics of bamboo’s physical properties. To keep the balance between aethetics of raw bamboo strips and the function of load-bearing, I created the special structure of the stool. The three stool legs and the upper surface formed two symmetrical triangles, and every bamboo strip is heated and bent to be crossed or connected with each other. During the handmaking process, Bamboo Stool only requires the same group of mould, according to the construction rule. And I tested dierent heating temperature, mould sizes and assembly\n' +
    'methods to suit raw bamboo strip’s properties.',
  images: [
    {
      src: COMMON_STATIC_PATH + '2.jpg',
      sources: [
        {
          src: COMMON_STATIC_PATH + '2.webp',
          type: 'image/webp'
        }
      ],
      preview_src: COMMON_STATIC_PATH + '2-preview.jpg',
      preview_sources: [
        {
          src: COMMON_STATIC_PATH + '2-preview.webp',
          type: 'image/webp'
        }
      ],
      alt: 'String board'
    }
  ],
  detail_images_meta: {
    dir: '/static/images/projectDetails/bamboo-stool',
    num: 4
  },
};
const menuItems = [
  {
    key: 'Bamboo Stool',
    label: 'Bamboo Stool'
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
