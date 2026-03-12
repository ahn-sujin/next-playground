import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'
import { Link } from '@/i18n/navigation'

export default function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations('about')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>

      <Link href="/">Home</Link>
    </div>
  )
}