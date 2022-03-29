import { createBooleanAtom } from '@reatom/core/primitives';
import { createAtom } from '@reatom/core';
import { routerAtom } from '@/modules/route';

import { ROUTES_LABELS, ROUTES_NAMES } from '@/modules/route';

export const menuIsOpenAtom = createBooleanAtom();

export type MenuItem = {
  label: string;
  route: string;
};

export const menu: MenuItem[] = [
  {
    label: ROUTES_LABELS.POSTS,
    route: ROUTES_NAMES.POSTS,
  },
  {
    label: ROUTES_LABELS.COMMENTS,
    route: ROUTES_NAMES.COMMENTS,
  },
  {
    label: ROUTES_LABELS.TAGS,
    route: ROUTES_NAMES.TAGS,
  },
];

function getKeyByValue<T extends string>(object: Record<T, string>, value: string) {
  return Object.keys(object).find((key) => {
    const K = key as T;
    return object[K] === value;
  }) as unknown as T | undefined;
}

export const headerLabelAtom = createAtom(
  {
    routerAtom,
  },
  (track) => {
    console.log('headerLabelAtom');
    const { route } = track.get('routerAtom');

    if (route) {
      console.log(route);

      const routeNameKey = getKeyByValue(ROUTES_NAMES, route.name);
      return routeNameKey ? ROUTES_LABELS[routeNameKey] : '';
    }

    return '';
  },
);
