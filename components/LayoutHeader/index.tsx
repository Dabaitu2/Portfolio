import * as React from 'react';
import styles from './index.module.less';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { useCurrentTab } from '../../utils/hooks/useCurrentTab';
import { useComponentDidMount } from '../../utils/hooks/useComponentDidMount';
import { useResizeCallback } from '../../utils/hooks/useResizeCallback';

interface MenuItem {
  key: string;
  label: string;
}

interface IProps {
  bodyStyle?: CSSProperties;
  menuItems?: MenuItem[];
}

const MenuItems: MenuItem[] = [
  {
    key: 'aboutMe',
    label: 'About Me'
  },
  {
    key: 'projects',
    label: 'Projects'
  }
];

/**
 * React-Hooks is much more powerful than you thought
 * @constructor
 */
const LayoutHeader: React.FC<IProps> = props => {
  const {
    state: {
      currentTab: { currentTab },
      scale: { scale }
    },
    actions: { setCurrentTab }
  } = useCurrentTab();
  // 设置小圆点的位置
  const [dotX, setDotX] = useState(0);
  const bodyWidth = useRef(null);
  const _MenuItems = [MenuItems[0]].concat(props.menuItems || []).concat(MenuItems[1]).map(item => ({
    ...item,
    ref: React.useRef()
  }));
  const { addCallback } = useResizeCallback();
  const { IsDone } = useComponentDidMount(() => {
    bodyWidth.current = document.getElementsByTagName('body')[0].offsetWidth;
    menuItemClickHandler(_MenuItems[currentTab])();
    addCallback(() => {
      bodyWidth.current = document.getElementsByTagName('body')[0].offsetWidth;
      menuItemClickHandler(_MenuItems[currentTab])();
    });
  });
  const menuItemClickHandler = useCallback(
    item => () => {
      if (!IsDone) {
        return;
      }
      const findIndex = _MenuItems.findIndex(m => {
        return m.key === item.key;
      });
      if (!~findIndex) {
        return;
      }
      const pageOffSetLeft = (bodyWidth.current - 1600 * scale) / 2;
      const offsetLeft = item.ref.current.offsetLeft;
      const offsetWidth = item.ref.current.offsetWidth;
      setDotX((offsetLeft + offsetWidth / 2 - pageOffSetLeft - 8) / scale);
      setCurrentTab(findIndex);
    },
    [bodyWidth, IsDone, scale]
  );
  useEffect(() => {
    if (IsDone) {
      menuItemClickHandler(_MenuItems[currentTab])();
    }
  }, [currentTab, scale, IsDone]);
  return (
    <div style={props.bodyStyle ?? {}}>
      <div className={styles['layout-menu-container']}>
        {_MenuItems.map(item => (
          <span
            key={item.key}
            ref={item.ref}
            className={styles['layout-menu-item']}
            onClick={menuItemClickHandler(item)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className={styles['layout-slider']}>
        <span
          className={styles['layout-slider-dot']}
          style={{
            transform: `translate(${dotX}rem, -8rem)`
          }}
        />
        <div className={styles['layout-slider-line']} />
      </div>
    </div>
  );
};

export default LayoutHeader;
