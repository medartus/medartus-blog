import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps({ locale }) {
  const authorDetails = await getFileBySlug('authors', locale, ['default'])
  return {
    props: {
      authorDetails,
      ...(await serverSideTranslations(locale, ['common', 'nav', 'siteMetadata', 'about'])),
    },
  }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
