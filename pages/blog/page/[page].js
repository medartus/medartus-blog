import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { POSTS_PER_PAGE } from '../../blog'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticPaths({ locales }) {
  const content = {
    paths: [],
    fallback: false,
  }
  console.log(locales)
  for (const locale of locales) {
    const totalPosts = await getAllFilesFrontMatter('blog', locale)
    const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
    for (let i = 0; i < totalPages; i++) {
      content.paths.push({
        params: { page: (i + 1).toString() },
        locale: locale,
      })
    }
  }
  return content
}

export async function getStaticProps(context) {
  const {
    params: { page },
    locale,
  } = context
  const posts = await getAllFilesFrontMatter('blog', locale)
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'nav', 'siteMetadata', 'blog', 'index'])),
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  const { t } = useTranslation('blog')
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={t('allPosts')}
      />
    </>
  )
}
