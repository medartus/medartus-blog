import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths({ locales }) {
  const content = {
    paths: [],
    fallback: false,
  }
  locales.forEach((locale) => {
    const posts = getFiles('blog', locale)
    posts.forEach((post) => {
      content.paths.push({
        params: {
          slug: formatSlug(post).split('/'),
        },
        locale,
      })
    })
  })
  return content
}

export async function getStaticProps({ params, locale }) {
  const allPosts = await getAllFilesFrontMatter('blog', locale)
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', locale, params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', locale, [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  const rss = generateRss(allPosts, locale)
  if (locale == 'en') fs.writeFileSync('./public/feed.xml', rss)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog', 'nav', 'siteMetadata'])),
      post,
      authorDetails,
      prev,
      next,
    },
  }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { t } = useTranslation('blog')
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            {t('UnderConstruction')}{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
