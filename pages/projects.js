import { readLocaleFile } from '@/lib/utils/files'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageContainer from '@/components/PageContainer'

export async function getStaticProps({ locale }) {
  const { projects } = await readLocaleFile(locale,'projects.json')

  return { 
    props: {
      projects: projects,
      ...await serverSideTranslations(locale, ['common','nav','siteMetadata','projects'])
    }
  }
}

export default function Projects({projects}) {
  const { t } = useTranslation('projects')
  const siteMeta = useTranslation('siteMetadata')
  return (
    <PageContainer>
      <PageSeo
        title={`${siteMeta.t('projects')} - ${siteMetadata.author}`}
        description={siteMeta.t('description')}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('projects')}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t('pageHeader')}
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
