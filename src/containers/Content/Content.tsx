import React from 'react';

import { PropsWithHTMLAttributes } from '@/types/PropsWithHTMLAttributes';
import { useRoute } from 'react-router5';
import { ROUTES_NAMES } from '@/modules/route';
import { Posts } from '@/pages/Posts';

export const Content: React.FC<PropsWithHTMLAttributes<{}, HTMLDivElement>> = ({
  children,
  ...otherProps
}) => {
  const { route } = useRoute();

  // console.log(route.name);

  // console.log(route.name === ROUTES_NAMES.POSTS);

  if (route.name === ROUTES_NAMES.POSTS) {
    return <Posts {...otherProps}>POSTS</Posts>;
  }

  if (route.name === ROUTES_NAMES.POSTS_ADD) {
    return <div {...otherProps}>POSTS_ADD</div>;
  }

  if (route.name === ROUTES_NAMES.POSTS_SHOW) {
    return <div {...otherProps}>POSTS_SHOW</div>;
  }

  if (route.name === ROUTES_NAMES.COMMENTS) {
    return <div {...otherProps}>COMMENTS</div>;
  }

  if (route.name === ROUTES_NAMES.TAGS) {
    return <div {...otherProps}>TAGS</div>;
  }

  return null;
};
