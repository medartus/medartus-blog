import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import PageContainer from '@/components/PageContainer'
import PageTitle from '@/components/PageTitle'
import PostLayout from '@/layouts/PostLayout'
import generateRss from '@/lib/generate-rss'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticPaths({ locales }) {
  const foo = {
    paths: [],
    fallback: false,
  }
  locales.forEach(locale => {
    const posts = getFiles('blog', locale)
    posts.forEach(post => {
      foo.paths.push({
        params: {
          slug: formatSlug(post).split('/'),
        },
        locale: locale,
      })
    });
  });
  return foo
}

export async function getStaticProps({ params, locale }) {
  const allPosts = await getAllFilesFrontMatter('blog', locale)
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', locale, params.slug)

  // rss
  const rss = generateRss(allPosts,locale)
  if(locale=='en') fs.writeFileSync('./public/index.xml', rss)

  return { 
    props: { 
      ...await serverSideTranslations(locale, ['common','nav','siteMetadata']),  
      post, 
      prev, 
      next 
    } 
  }
}

export default function Blog({ post, prev, next }) {
  const { mdxSource, frontMatter } = post

  return (
    <PageContainer>
      {frontMatter.draft !== true ? (
        <PostLayout frontMatter={frontMatter} prev={prev} next={next}>
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </PostLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </PageContainer>
  )
}
