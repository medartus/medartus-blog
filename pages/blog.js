import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageContainer from '@/components/ContentContainer'

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter('blog', locale)

  return { 
    props: { 
      posts,
      ...await serverSideTranslations(locale, ['common','nav','blog']),
    },
  }
}

export default function Blog({ posts }) {
  const { t } = useTranslation('blog')
  return (
    <PageContainer>
      <PageSeo
        title={`${t('blog')} - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <ListLayout posts={posts} title={t('allPosts')} />
    </PageContainer>
  )
}
