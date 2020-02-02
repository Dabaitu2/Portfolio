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
  title: 'EMO',
  desc: ['a programming education robot and', 'an online education platform'],
  tags: ['Integrated Product Development | STEAM Education Service Design | Team Work in 8 weeks | Oct 2017 '],
  mainColor: '#304690',
  details:
    "EMO is an educational robot, applying applies Arduino to teach children aged 6-12 to learn programming and robot assembly, in order to stimulate creativity and prepare for advanced education. EMO's name comes from emotion. We hope that children could build up emotional connection with EMO robot. EMO has a pleasing appearance with two big eyes and a clear, easy-to-assemble internal structure. In addition to the physical model, we also created an online platform, in order to improve teaching efficiency and parental involvement. The physical robot and the online platform together form a sustainable STEAM education system that provides better services for  studens, teachers and parents.",
  images: [
    {
      src: COMMON_STATIC_PATH + '4.jpg',
      sources: [
        {
          src: COMMON_STATIC_PATH + '4.webp',
          type: 'image/webp'
        }
      ],
      preview_src: COMMON_STATIC_PATH + '4-preview.jpg',
      preview_sources: [
        {
          src: COMMON_STATIC_PATH + '4-preview.webp',
          type: 'image/webp'
        }
      ],
      alt: 'EMO'
    }
  ]
};
const menuItems = [
  {
    key: 'EMO',
    label: 'EMO'
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
