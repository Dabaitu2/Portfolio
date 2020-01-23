import * as React from 'react';
import styles from './index.module.less';
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { useCurrentTab } from '../../utils/hooks/useCurrentTab';

interface MenuItem {
  key: string;
  label: string;
}

interface IProps {
  bodyStyle?: CSSProperties;
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
      currentTab: { currentTab }
    },
    actions: { setCurrentTab }
  } = useCurrentTab();
  // 设置小圆点的位置
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [dotX, setDotX] = useState(0);
  const bodyWidth = useRef(null);
  const _MenuItems = MenuItems.map(item => ({
    ...item,
    ref: React.useRef()
  }));
  const menuItemClickHandler = useCallback(
    item => () => {
      if (!firstLoaded) {
        return;
      }
      const findIndex = _MenuItems.findIndex(m => {
        return m.key === item.key;
      });
      if (!~findIndex) {
        return;
      }
      const pageOffSetLeft = (bodyWidth.current - 1600) / 2;
      const offsetLeft = item.ref.current.offsetLeft;
      const offsetWidth = item.ref.current.offsetWidth;
      setDotX(offsetLeft + offsetWidth / 2 - pageOffSetLeft - 8);
      setCurrentTab(findIndex);
    },
    [bodyWidth, firstLoaded]
  );
  // 判断是否是第一次渲染
  useEffect(() => {
    if (!firstLoaded) {
      setFirstLoaded(true);
    }
  }, []);
  // 根据不是第一次渲染，来模拟componentDidMount 拿document 对象
  useEffect(() => {
    if (firstLoaded) {
      bodyWidth.current = document.getElementsByTagName('body')[0].offsetWidth;
      menuItemClickHandler(_MenuItems[currentTab])();
    }
  }, [firstLoaded]);
  useEffect(() => {
    menuItemClickHandler(_MenuItems[currentTab])();
  }, [currentTab]);
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
            transform: `translate(${dotX}px, -8px)`
          }}
        />
        <div className={styles['layout-slider-line']} />
      </div>
    </div>
  );
};

export default LayoutHeader;
