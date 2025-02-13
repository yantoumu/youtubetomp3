# auto-form-ai-website

这是一个使用现代前端技术栈构建的网站项目。

## 技术栈

- **Next.js**: 基于 React 的全栈框架
  - 使用了 Pages Router（基于 `/pages` 目录结构）
  - MDX 支持（`.mdx` 文件用于博客内容）
  - 服务器端渲染 (SSR) 支持，有利于 SEO
  - 静态页面生成 (SSG) 能力，提升性能和搜索引擎收录

- **样式处理**:
  - PostCSS（有 `postcss.config.js` 配置）
  - CSS Modules（`style.css`）

- **包管理**:
  - 支持 pnpm（存在 `pnpm-lock.yaml`）
  - 同时兼容 npm（存在 `package-lock.json`）

- **内容管理**:
  - 使用 MDX 进行博客内容管理
  - 自定义主题配置（`theme.config.tsx`）

## SEO 优势

1. **服务器端渲染**
   - 页面内容在服务器端完成渲染
   - 搜索引擎可以直接抓取完整的 HTML 内容
   - 提升首屏加载速度和搜索引擎友好度

2. **静态页面生成**
   - 博客文章（`.mdx`）会在构建时预渲染为静态 HTML
   - 极快的页面加载速度
   - 更好的搜索引擎收录效果

3. **元数据优化**
   - 支持动态生成 title 和 meta 标签
   - 可以为每个页面设置独特的描述和关键词
   - 支持 Open Graph 协议，优化社交媒体分享效果

4. **URL 结构**
   - 基于文件系统的路由，生成清晰的 URL 结构
   - 有利于搜索引擎理解网站架构
   - 支持自定义重写规则优化 URL

## SEO 最佳实践建议

1. **内容优化**
   - 为每个 MDX 文件添加合适的 frontmatter 元数据
   - 使用语义化的 HTML 标签
   - 确保合理的标题层级（h1-h6）结构

2. **性能优化**
   - 使用 Next.js 的图片优化功能
   - 实施适当的缓存策略
   - 优化核心网站指标（Core Web Vitals）

3. **技术优化**
   - 生成动态 sitemap.xml
   - 配置 robots.txt
   - 实现结构化数据（Schema.org）

## SEO 优化实现

1. **动态 Sitemap**
   - 通过 `/pages/sitemap.xml.tsx` 自动生成
   - 包含所有博客文章 URL
   - 自动更新，无需手动维护

2. **Robots.txt 配置**
   - 通过 `/pages/robots.txt.tsx` 动态生成
   - 允许搜索引擎爬取所有公开内容
   - 合理限制特定路径的访问
   - 自动包含 sitemap 位置

3. **使用方法**
   - Sitemap 访问地址: https://your-domain.com/sitemap.xml
   - Robots.txt 访问地址: https://your-domain.com/robots.txt
   - 部署后自动生效，无需额外配置

## 项目结构
# mp3
