import { useTranslations } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'ru' }, { locale: 'en' }];
}

export default function Services() {
  const t = useTranslations('services');

  return (
    <main className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center">{t('title')}</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">{t('online.title')}</h2>
            <p className="text-gray-700">{t('online.description')}</p>
          </div>
          <div className="p-8 border rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">{t('personal.title')}</h2>
            <p className="text-gray-700">{t('personal.description')}</p>
          </div>
          <div className="p-8 border rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">{t('retreats.title')}</h2>
            <p className="text-gray-700">{t('retreats.description')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
