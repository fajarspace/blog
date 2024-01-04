import matter from 'gray-matter'
import path from 'path'
import type { Post } from './types'
import fs from 'fs/promises'
import { cache } from 'react'

const thirdPartyBuku: Post[] = [
  // {
  //   title: 'Introducing the Vercel AI SDK',
  //   description:
  //     'An interoperable, streaming-enabled, edge-ready software development kit for AI apps built with React and Svelte.',
  //   body: '',
  //   date: '2023-06-15T13:00:00.000Z',
  //   slug: '',
  //   tags: [],
  //   lastModified: 0,
  //   isThirdParty: true,
  //   href: 'https://vercel.com/blog/introducing-the-vercel-ai-sdk',
  // },
  // {
  //   title: 'Improving the accessibility of our Next.js site',
  //   description:
  //     "We've made some improvements to the accessibility of our Next.js site. Here's how we did it.",
  //   body: '',
  //   date: '2022-09-30T13:00:00.000Z',
  //   slug: '',
  //   tags: [],
  //   lastModified: 0,
  //   isThirdParty: true,
  //   href: 'https://vercel.com/blog/improving-the-accessibility-of-our-nextjs-site',
  // },
]

export const getBuku = cache(async (includeThirdPartyBuku?: boolean) => {
  const book = await fs.readdir('./content/buku/')

  const postsWithMetadata = await Promise.all(
    book
      .filter(
        (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx',
      )
      .map(async (file) => {
        const filePath = `./content/buku/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }

        return { ...data, body: content } as Post
      }),
  )

  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(includeThirdPartyBuku ? thirdPartyBuku : []),
  ]

  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0,
    ) as Post[]

  return filtered
})

export async function buku(slug: string) {
  const book = await getBuku()
  return book.find((post) => post.slug === slug)
}

export default getBuku
