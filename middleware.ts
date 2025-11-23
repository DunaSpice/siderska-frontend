import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always' // Always include the locale prefix
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
