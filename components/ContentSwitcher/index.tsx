import React, { FC } from 'react';
import { useCurrentTab } from '../../utils/hooks/useCurrentTab';

interface IProps {
  children: any;
}

export const ContentSwitcher: FC<IProps> = (props: IProps) => {
  const {
    state: {
      currentTab: { currentTab }
    }
  } = useCurrentTab();
  return (
    <div
      style={{
        width: '1600rem',
        overflowX: 'hidden'
      }}
    >
      <div
        style={{
          width: props.children.length * 1600 + 'rem',
          display: 'flex',
          transform: `translateX(-${currentTab * 1600}rem)`,
          transition: '0.6s ease-in-out'
        }}
      >
        {props.children
          ? props.children.map((c, i) => (
              <div
                style={{
                  width: '1600rem',
                  height: i === currentTab ? '100%' : '0',
                  overflow: 'hidden',
                  transition: '0.6s ease-in-out'
                }}
              >
                {c}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
