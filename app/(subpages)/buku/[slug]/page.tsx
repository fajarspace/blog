import getBuku, { buku } from '@lib/get-buku'
import { PostBody } from '@mdx/post-body'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const books = await getBuku()
  return books.map((buku) => ({ slug: buku.slug }))
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const book = await buku(params.slug)
  if (!book) return notFound()
  return <PostBody>{book?.body}</PostBody>
}
