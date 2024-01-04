import getBuku from '@lib/get-buku'
import Navigation from './buku/navigation'
import PostFooter from './buku/footer'
import styles from './layout.module.css'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const books = await getBuku()
  return books.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string
  }
}): Promise<Metadata> => {
  const post = (await getBuku()).find((p) => p?.slug === params.slug)
  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://fajarr.space/buku/${params.slug}`,
    },
  }
}

async function getData({ slug }: { slug: string }) {
  const books = await getBuku()
  const postIndex = books.findIndex((p) => p?.slug === slug)

  if (postIndex === -1) {
    throw new Error(
      `${slug} not found in books. Did you forget to rename the file?`,
    )
  }

  const post = books[postIndex]

  const { ...rest } = post

  return {
    previous: books[postIndex + 1] || null,
    next: books[postIndex - 1] || null,
    ...rest,
  }
}

export default async function PostLayout({
  children,
  params,
}: {
  children: JSX.Element
  params: {
    slug: string
  }
}) {
  const { previous, next, title, date, lastModified } = await getData(params)

  const lastModifiedDate = lastModified
    ? new Date(lastModified).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
        {lastModified ? (
          <span className={styles.lastModified}>
            Last modified {lastModifiedDate}
          </span>
        ) : null}
        {/* {updatedViews && <FadeIn>{updatedViews} views</FadeIn>} */}
      </div>
      <article>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
      <PostFooter />
      <Navigation previous={previous} next={next} />
    </>
  )
}
