import React from 'react';

import { PropsWithHTMLAttributes } from '@/types/PropsWithHTMLAttributes';

import { cnPage } from '@/utils/bem';

const cnPosts = cnPage('Posts');

export const Posts: React.FC<PropsWithHTMLAttributes<{}, HTMLDivElement>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div {...otherProps} className={cnPosts(null, [className])}>
      Posts
    </div>
  );
};
