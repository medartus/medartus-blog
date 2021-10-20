import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import { default as NLink } from 'next/link'
import { useRouter } from 'next/router'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useTranslation } from 'next-i18next'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const { t } = useTranslation('nav')
  const siteMeta = useTranslation('siteMetadata')
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMeta.t('headerTitle') === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMeta.t('headerTitle')}
                  </div>
                ) : (
                  siteMeta.t('headerTitle')
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {t(link.title)}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <NLink href={router.asPath} locale={router.locale === 'en' ? 'fr' : 'en'}>
              <button
                aria-label={t('switchLanguage')}
                type="button"
                className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
              >
                {t('otherLanguageFlag')}
              </button>
            </NLink>
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
