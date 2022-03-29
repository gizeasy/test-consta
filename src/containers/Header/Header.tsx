import React from 'react';

import { cnContainers } from '@/utils/bem';

import { PropsWithHTMLAttributes } from '@/types/PropsWithHTMLAttributes';
import { Layout } from '@consta/header/Layout';
import { Button } from '@consta/uikit/Button';
import { IconHamburger } from '@consta/uikit/IconHamburger';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { Avatar } from '@consta/uikit/Avatar';
import { menuIsOpenAtom, headerLabelAtom } from '@/modules/header';
import { useAtom } from '@reatom/react';
import { routerAtom } from '@/modules/route';

import { useAction } from '@reatom/react';

const cnHeader = cnContainers('Header');

type HeaderProps = PropsWithHTMLAttributes<{}, HTMLDivElement>;
type HeaderComponent = (props: HeaderProps) => React.ReactElement | null;

export const Header: HeaderComponent = ({ children, className, ...otherProps }) => {
  const onBurgerClick = useAction(menuIsOpenAtom.toggle);
  const [router] = useAtom(routerAtom);
  const [label] = useAtom(headerLabelAtom);

  console.log(router);

  return (
    <Layout
      {...otherProps}
      className={cnHeader(null, [className])}
      rowCenter={{
        left: [
          <Button
            key="Button"
            className={cnMixSpace({ mR: 'm' })}
            iconLeft={IconHamburger}
            view="clear"
            form="round"
            onClick={onBurgerClick}
          />,
          <Text key="Text" size="l">
            {label}
          </Text>,
        ],
        right: [<Avatar key="Avatar" name="Иванов Иван" />],
      }}
    />
  );
};
