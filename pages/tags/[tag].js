import { PageSeo } from '@/components/SEO'
import PageContainer from '@/components/PageContainer'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/siteMetadata'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const root = process.cwd()

export async function getStaticPaths({locales}) {
  const foo = {
    paths: [],
    fallback: false,
  }
  for (const locale of locales) {
   const tags = await getAllTags('blog', locale)
    Object.keys(tags).map((tag) => {
      foo.paths.push({
      params: {
        tag,
      },
      locale: locale,
    })
    }); 
  }

  return foo
}

export async function getStaticProps({ params, locale }) {
  const allPosts = await getAllFilesFrontMatter('blog', locale)
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss
  const rss = generateRss(filteredPosts, locale, `tags/${params.tag}/index.xml`)
  const rssPath = path.join(root, 'public', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'index.xml'), rss)

  return { 
    props: { 
      ...await serverSideTranslations(locale, ['common','nav','siteMetadata']),  
      posts: filteredPosts, 
      tag: params.tag 
    } 
  }
}

export default function Tag({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const { t } = useTranslation('siteMetadata')
  return (
    <PageContainer>
      <PageSeo
        title={`${tag} - ${t('title')}`}
        description={`${tag} tags - ${t('title')}`}
        url={`${siteMetadata.siteUrl}/tags/${tag}`}
      />
      <ListLayout posts={posts} title={title} />
    </PageContainer>
  )
}