import React from 'react';

import './Posts.css';

import { postsAtom, Post, collapsedPostAtom } from '@/modules/posts';

import { useAtom } from '@reatom/react';
import { Text } from '@consta/uikit/Text';

import { PropsWithHTMLAttributes } from '@/types/PropsWithHTMLAttributes';
import { cnMixCard } from '@consta/uikit/MixCard';
import { Button } from '@consta/uikit/Button';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';

import { cnPage } from '@/utils/bem';

const cnPosts = cnPage('Posts');

export const Posts: React.FC<PropsWithHTMLAttributes<{}, HTMLDivElement>> = ({
  children,
  className,
  ...otherProps
}) => {
  const [posts] = useAtom(postsAtom);
  const [collapsedPost, setCollapsedPost] = useAtom(collapsedPostAtom);

  return (
    <div {...otherProps} className={cnPosts(null, [className])}>
      <table className={cnPosts('Table', [cnMixCard({ form: 'round', shadow: true })])}>
        <tr className={cnPosts('Header')}>
          <td className={cnPosts('Col', { number: 1 })}></td>
          <td className={cnPosts('Col')}>
            <Text transform="uppercase" truncate>
              id
            </Text>
          </td>
          <td className={cnPosts('Col')}>
            <Text transform="uppercase" truncate>
              Заголовок
            </Text>
          </td>
          <td className={cnPosts('Col')}>
            <Text transform="uppercase" truncate>
              Просмотры
            </Text>
          </td>
          <td className={cnPosts('Col')}></td>
        </tr>
        {Array.from(posts.keys()).map((key) => {
          const post = posts.get(key) as Post;

          return (
            <>
              <tr className={cnPosts('Item')}>
                <td className={cnPosts('Col', { number: 1 })}>
                  <Button
                    className={cnPosts('CollapseButton', { active: collapsedPost === key })}
                    iconLeft={IconArrowRight}
                    size="s"
                    view="clear"
                    form="round"
                    onClick={() => setCollapsedPost.set(key)}
                  />
                </td>
                <td className={cnPosts('Col')}>{post.id}</td>
                <td className={cnPosts('Col')}>{post.title}</td>
                <td className={cnPosts('Col')}>{post.views}</td>
                <td className={cnPosts('Col')}>d</td>
              </tr>
              {collapsedPost === key && (
                <tr>
                  <td colSpan={5} className={cnPosts('Description')}>
                    {post.description}
                  </td>
                </tr>
              )}
            </>
          );
        })}
      </table>
    </div>
  );
};
