import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'ru' }, { locale: 'en' }];
}

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {t('hero.subtitle')}
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('services.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">{t('services.online')}</h3>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">{t('services.personal')}</h3>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">{t('services.retreats')}</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
