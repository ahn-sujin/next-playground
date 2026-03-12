import { defineRouting } from 'next-intl/routing'

const isLocal = process.env.NODE_ENV === 'development'

export const routing = defineRouting({
  locales: ['ja', 'ko'],
  defaultLocale: 'ja',
  localePrefix: 'never',
//   domains: isLocal ? undefined : [
//     { domain: 'www.asj.jp', defaultLocale: 'ja' },
//     { domain: 'www.asj.cn', defaultLocale: 'zh' },
//     { domain: 'www.asj.com', defaultLocale: 'en' }
//   ]
})