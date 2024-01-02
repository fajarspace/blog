import getPosts from './lib/get-posts'

export default async function sitemap() {
  const posts = await getPosts()
  const blogs = posts.map((post) => ({
    url: `https://fajarr.space/blog/${post.slug}`,
    lastModified: post.lastModified
      ? new Date(post.lastModified).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
  }))

  const routes = ['', '/about', '/projects'].map((route) => ({
    url: `https://fajarr.space${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
