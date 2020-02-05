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
  images: [
    {
      src: COMMON_STATIC_PATH + '6.jpg',
      sources: [
        {
          src: COMMON_STATIC_PATH + '6.webp',
          type: 'image/webp'
        }
      ],
      preview_src: COMMON_STATIC_PATH + '6-preview.jpg',
      preview_sources: [
        {
          src: COMMON_STATIC_PATH + '6-preview.webp',
          type: 'image/webp'
        }
      ],
      alt: 'String board'
    }
  ],
  mainColor: '#81501E',
  title: 'Stringboard',
  desc: ['an input tool and', 'an electronic instrument'],
  tags: ['Integrated Product Development | Interaction Design | Personal Work | Apr 2017 '],
  detail_images_meta: {
    dir: '/static/images/projectDetails/stringboard',
    num: 5
  },
  details:
    'Stringboard is an input tool as well as an electronic instrument, inspired by Chinese instrument Guqin, bringing the ancient Chinese poetic experience to modern life. \n' +
    'Stringboard comes from the combination of “string” and “board”. The long-shaped metal “string” imitates the image of the string, applying the surface acoustic wave touch technology, so that the user only needs to stroke slightly to input information and use unique shortcut input gesture. The stroking and swiping finger gestures are like playing the Guqin. And Stringboard applys natural material, such as black walnut or bamboo, which highlights the metal string at the same time.'
};
const menuItems = [
  {
    key: 'stringBoard',
    label: 'StringBoard'
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
      <LayoutHeader menuItems={menuItems}/>
      <ContentSwitcher>
        <Profile/>
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
