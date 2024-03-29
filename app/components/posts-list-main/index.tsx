'use client'

import { useState } from 'react'

import BlockEntry from '@components/entry/block'
import styles from './posts-list.module.css'
import type { Post } from '@lib/types'
import Link from 'next/link'

type Props =
  | {
      posts: Post[]
      paginate?: boolean
    }
  | {
      skeleton: true
    }

const PostsMain = (props: Props) => {
  const [showMore] = useState(4)

  if ('skeleton' in props) {
    return (
      <ul className={styles.container}>
        {[...Array(4)].map((_, i) => (
          <BlockEntry key={i} skeleton />
        ))}
      </ul>
    )
  }

  const { posts, paginate } = props

  return (
    <ul className={styles.container}>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })

        return (
          <BlockEntry
            key={`post-item-${post.slug}`}
            href={post.isThirdParty ? post.href! : `/blog/${post.slug}`}
            title={post.title}
            description={post.description}
            date={new Date(date)}
            views={post.views}
            isThirdParty={post.isThirdParty}
          />
        )
      })}
      {paginate && showMore < posts.length && (
        <li>
          Lihat post lainnya <Link href="/blog"> disini</Link>
        </li>
      )}
    </ul>
  )
}

export default PostsMain
