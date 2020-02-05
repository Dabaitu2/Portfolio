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
  title: 'Dual-layer Solution',
  desc: ['a solution for closing the loop', 'on plastic food packaging'],
  tags: ['Business Strategy | Product Service System Design | Team Work in 2 days | Dec 2019 '],
  mainColor: '#FF732D',
  details:
    'Dual-layer Solution offers a new dual-layer food packaging, and the optimization of manufacturing, sorting and recycling\n' +
    'processes of that. The upper, thin film is made of biodegradable plastic, PLA, which is a water-soluble polymer with good film-forming property and resistance to grease. After the meal, consumers just need to tear off the PLA film, wrapping food residues, and then discard it into degradation dustbin; it protects the lower layer of PP plastic from food contamination and makes it can be reused or completely recycled. Dual-layer solution has a practical and acceptable product improvement to increase the recycling rate of plastic food packaging. And during manufacturing, sorting and recycling process, it makes every stakeholders have profit benefit as well as sprit incentives.',
  images: [
    {
      src: COMMON_STATIC_PATH + '1.jpg',
      sources: [
        {
          src: COMMON_STATIC_PATH + '1.webp',
          type: 'image/webp'
        }
      ],
      preview_src: COMMON_STATIC_PATH + '1-preview.jpg',
      preview_sources: [
        {
          src: COMMON_STATIC_PATH + '1-preview.webp',
          type: 'image/webp'
        }
      ],
      alt: 'dual-layer'
    }
  ],
  detail_images_meta: {
    dir: '/static/images/projectDetails/dual-layer-solution',
    num: 8
  },
};
const menuItems = [
  {
    key: 'dualLayerSolution',
    label: 'Dual-layer Solution'
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
