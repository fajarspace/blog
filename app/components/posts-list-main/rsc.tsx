import getPosts from '@lib/get-posts'
import PostsList from '.'

export async function PostMainRSC({ paginate }: { paginate?: boolean }) {
  const posts = await getPosts(true)
  return <PostsList posts={posts} paginate={paginate} />
}
