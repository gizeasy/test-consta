import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { store } from '@/modules/app';
import { createRouterAtom } from './plugin';

export type RouterItem = {
  name: string;
  path: string;
};

export const ROUTES_NAMES = {
  POSTS: 'POSTS',
  POSTS_SHOW: 'POSTS.SHOW',
  POSTS_EDIT: 'POSTS.EDIT',
  POSTS_ADD: 'POSTS.ADD',
  COMMENTS: 'COMMENTS',
  TAGS: 'TAGS',
};

export const ROUTES_LABELS = {
  POSTS: 'Посты',
  POSTS_SHOW: 'Пост',
  POSTS_EDIT: 'Пост',
  POSTS_ADD: 'Создать пост',
  COMMENTS: 'Коментарии',
  TAGS: 'Теги',
};

export const routes: RouterItem[] = [
  {
    name: ROUTES_NAMES.POSTS,
    path: '/',
  },
  {
    name: ROUTES_NAMES.POSTS_SHOW,
    path: '/show?:id',
  },
  {
    name: ROUTES_NAMES.POSTS_EDIT,
    path: '/edit?:id',
  },
  {
    name: ROUTES_NAMES.POSTS_ADD,
    path: '/add',
  },
  {
    name: ROUTES_NAMES.COMMENTS,
    path: '/comments',
  },
  {
    name: ROUTES_NAMES.TAGS,
    path: '/tags',
  },
];

export const router = createRouter(routes);

export const routerAtom = createRouterAtom(router, store);

router.usePlugin(browserPlugin());

router.start();
