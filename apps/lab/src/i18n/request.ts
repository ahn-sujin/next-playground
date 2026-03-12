import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const isLocal = process.env.NODE_ENV === 'development'

  const requested = isLocal
    ? process.env.NEXT_PUBLIC_LOCALE
    : await requestLocale

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})