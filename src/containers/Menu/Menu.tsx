import React from 'react';

import { cnContainers } from '@/utils/bem';
import { PropsWithHTMLAttributes } from '@/types/PropsWithHTMLAttributes';
import { VerticalMenu } from '@consta/header/VerticalMenu';
import { Sidebar } from '@consta/uikit/Sidebar';
import { menuIsOpenAtom, menu, MenuItem } from '@/modules/header';
import { router } from '@/modules/route';
import { useAtom } from '@reatom/react';

const cnMenu = cnContainers('Menu');

const getItemLabel = (item: MenuItem) => item.label;
const getItemHref = (item: MenuItem) => router.buildPath(item.route);

export const Menu: React.FC<PropsWithHTMLAttributes<{}, HTMLDivElement>> = ({
  children,
  className,
  ...otherProps
}) => {
  const [isOpen, { toggle, setFalse }] = useAtom(menuIsOpenAtom);

  const handleItemClick = (params: { e: React.MouseEvent; item: MenuItem }) => {
    params.e.preventDefault();
    router.navigate(params.item.route);
    setFalse();
  };

  return (
    <Sidebar
      {...otherProps}
      className={cnMenu(null, [className])}
      isOpen={isOpen}
      position="left"
      onClickOutside={toggle}
    >
      <VerticalMenu
        items={menu}
        getItemLabel={getItemLabel}
        onItemClick={handleItemClick}
        getItemHref={getItemHref}
      />
    </Sidebar>
  );
};
