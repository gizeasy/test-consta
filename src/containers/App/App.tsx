import React from 'react';
import './App.css';

import { cnContainers } from '@/utils/bem';

import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { PropsWithHTMLAttributes } from '@/types/PropsWithHTMLAttributes';

import { Header } from '@/containers/Header';
import { Menu } from '@/containers/Menu';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Content } from '@/containers/Content';

const cnApp = cnContainers('App');

export const App: React.FC<PropsWithHTMLAttributes<{}, HTMLDivElement>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Theme {...otherProps} preset={presetGpnDefault} className={cnApp(null, [className])}>
      <Header />
      <Menu />
      <Content className={cnMixSpace({ p: '2xl' })} />
    </Theme>
  );
};
