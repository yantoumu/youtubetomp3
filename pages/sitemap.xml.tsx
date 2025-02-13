import { GetServerSideProps } from 'next'

const EXTERNAL_DATA_URL = 'https://your-domain.com'

function generateSiteMap(posts: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- 添加主页 URL -->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <!-- 添加博客文章 URLs -->
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/blog/${post}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps 会处理 XML
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // 从文件系统中获取所有博客文章路径
  const posts = ['best-youtube-to-mp3-converter', 'best-youtube-to-mp3-converter-reddit']

  // 生成 sitemap XML
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap 