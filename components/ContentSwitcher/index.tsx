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
        width: '1600px',
        overflowX: 'hidden'
      }}
    >
      <div
        style={{
          width: '3200px',
          display: 'flex',
          transform: `translateX(-${currentTab * 1600}px)`,
          transition: '0.6s ease-in-out'
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
