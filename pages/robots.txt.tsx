import { GetServerSideProps } from 'next'

function RobotsTxt() {
  // getServerSideProps 会处理内容
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml

# 禁止访问的路径
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robotsTxt)
  res.end()

  return {
    props: {},
  }
}

export default RobotsTxt 