import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'
import { Link } from '@/i18n/navigation'

export default function Page({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations('common')

  return (
    <div>
      <h1>{t('title')}</h1>
      <button>{t('submit')}</button>
      <button>{t('cancel')}</button>

      <div>
        <Link href="/about">About</Link>
      </div>
    </div>
  )
}