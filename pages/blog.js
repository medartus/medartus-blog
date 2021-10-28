import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const POSTS_PER_PAGE = 5

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter('blog', locale)
  console.log(posts)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts,
      posts,
      pagination,
      ...(await serverSideTranslations(locale, ['common', 'nav', 'siteMetadata', 'blog', 'index'])),
    },
  }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  const { t } = useTranslation('blog')
  return (
    <>
      <PageSEO title={`${t('blog')} - ${siteMetadata.author}`} description={t('description')} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={t('allPosts')}
      />
    </>
  )
}
