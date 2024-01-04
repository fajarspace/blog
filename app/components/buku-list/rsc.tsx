import getBuku from '@lib/get-buku'
import PostsList from '.'

export async function BukuListRSC({ paginate }: { paginate?: boolean }) {
  const buku = await getBuku(true)
  return <PostsList posts={buku} paginate={paginate} />
}
