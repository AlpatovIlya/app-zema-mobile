import React, {FC} from 'react';

// type Size = 'small' | 'medium';
export enum Size {
  Small = 'Small',
  Medium = 'medium',
}

type Props = {
  size: Size;
};

const Icon: FC<Props> = ({size}) => {
  console.log(size);
  return <></>;
};

export default Icon;
