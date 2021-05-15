
import { DefaultSeo } from 'next-seo'
import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function PageContainer({children}) {
  return (
    <>
        <DefaultSeo {...SEO} />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
    </>
  )
}
