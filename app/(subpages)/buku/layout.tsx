import Outline from '@components/layout-outline'

export const metadata = {
  title: 'Buku',
  description: 'Baca buku seputar Teknologi atau lainnya.',
  alternates: {
    canonical: 'https://fajarr.space/buku',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Outline type="layout" name="Buku">
      <article>{children}</article>
    </Outline>
  )
}
