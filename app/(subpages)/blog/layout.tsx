import Outline from '@components/layout-outline'

export const metadata = {
  title: 'Blog',
  description: 'Temukan Tulisan / baca blog dev',
  alternates: {
    canonical: 'https://fajarr.space/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Outline type="layout" name="Blog">
      <article>{children}</article>
    </Outline>
  )
}
