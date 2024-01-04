'use client'

import { useState } from 'react'

import BukuBlockEntry from '@components/entry/bukublock'
import styles from './buku-list.module.css'
import type { Post } from '@lib/types'

type Props =
  | {
      posts: Post[]
      paginate?: boolean
    }
  | {
      skeleton: true
    }

const Books = (props: Props) => {
  const [showMore, setShowMore] = useState(4)

  if ('skeleton' in props) {
    return (
      <ul className={styles.container}>
        {[...Array(4)].map((_, i) => (
          <BukuBlockEntry key={i} skeleton />
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
          <BukuBlockEntry
            key={`post-item-${post.slug}`}
            href={post.isThirdParty ? post.href! : `/buku/${post.slug}`}
            title={post.title}
            tags={post.tags}
            date={new Date(date)}
            views={post.views}
            isThirdParty={post.isThirdParty}
          />
        )
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 4)
          }}
          className={styles.button}
        >
          Show More
        </button>
      )}
    </ul>
  )
}

export default Books
