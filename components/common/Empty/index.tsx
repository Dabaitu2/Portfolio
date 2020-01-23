import React, { FC } from 'react';

interface IProps {
  content: string;
}

export const Empty: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <h1>{props.content}</h1>
    </div>
  );
};
