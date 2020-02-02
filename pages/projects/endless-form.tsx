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
  title: 'EndlessForm',
  desc: ['a digital creator and designer', 'based on ACO algorithm study'],
  tags: [`Creative Digital Product Design | Algorithm Study | Personal Work | Dec 2017 `],
  mainColor: '#A100FF',
  details:
    'EndlessForm contains the research of Ant Colony Optimization (ACO) Algorithm, the visual presentation of ACO Algorithm in Grasshopper, and the digital application (your private digital designer) of ACO Algorithm in Grasshopper for the public. The principle of ACO Algorithm is that an individual affects the whole group, which means its inherent law is suitable for a very wide range. When I used Quelea in grasshopper to simulate ACO algorithm, firstly I generated particles with some properties, and adjusted their dynamic particle parameters. By setting the parameters of environmrnt, these particles would present different movement tracks. These computer-generated tracks become visual images and 3D models after some processes, and these processes are put into a mobile app for the public.',
  images: [
    {
      src: COMMON_STATIC_PATH + '5.jpg',
      sources: [
        {
          src: COMMON_STATIC_PATH + '5.webp',
          type: 'image/webp'
        }
      ],
      preview_src: COMMON_STATIC_PATH + '5-preview.jpg',
      preview_sources: [
        {
          src: COMMON_STATIC_PATH + '5-preview.webp',
          type: 'image/webp'
        }
      ],
      alt: 'Endless Form'
    }
  ]
};
const menuItems = [
  {
    key: 'EndlessForm',
    label: 'EndlessForm'
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
