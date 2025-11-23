import { useTranslations } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'ru' }, { locale: 'en' }];
}

export default function About() {
  const t = useTranslations('about');

  return (
    <main className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">{t('title')}</h1>
        <p className="text-xl text-gray-700 mb-6">{t('experience')}</p>
      </div>
    </main>
  );
}
