export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://fajarr.space/sitemap.xml',
    host: 'https://fajarr.space',
  }
}
