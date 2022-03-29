import { createMapAtom, createNumberAtom } from '@reatom/core/primitives';
import { initionalPosts } from './data.mock';

export type Post = {
  id: number;
  title: string;
  description: string;
  views: number;
};

export const postsAtom = createMapAtom(initionalPosts);

export const collapsedPostAtom = createNumberAtom();
