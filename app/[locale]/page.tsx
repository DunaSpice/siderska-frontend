import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'ru' }, { locale: 'en' }];
}

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/schedule"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition"
            >
              {t('hero.watchVideo')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold text-lg mb-2">{t('about.headline')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('about.preview')}
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
            >
              {t('about.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-lg text-gray-700">{t('services.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:shadow-2xl hover:border-orange-400 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('services.online')}</h3>
              <p className="text-gray-600 mb-6">Регулярні групові заняття в прямому ефірі</p>
              <Link 
                href="/services" 
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                Докладніше →
              </Link>
            </div>
            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:shadow-2xl hover:border-orange-400 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('services.personal')}</h3>
              <p className="text-gray-600 mb-6">Індивідуальний підхід до вашої практики</p>
              <Link 
                href="/services" 
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                Докладніше →
              </Link>
            </div>
            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:shadow-2xl hover:border-orange-400 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('services.retreats')}</h3>
              <p className="text-gray-600 mb-6">Тижневі йога-ретрити в Туреччині</p>
              <Link 
                href="/services" 
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                Докладніше →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
            >
              {t('services.seeAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('philosophy.title')}</h2>
          <blockquote className="text-2xl md:text-3xl text-orange-600 font-medium italic mb-8">
            "{t('philosophy.quote')}"
          </blockquote>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('philosophy.description')}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{t('testimonials.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4 italic">
                "Заняття з Оленою змінили моє ставлення до йоги. Це не просто вправи, а справжня робота з собою."
              </p>
              <p className="text-gray-900 font-semibold">— Марія, Київ</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4 italic">
                "19 років досвіду відчувається в кожному русі, кожній підказці. Професіонал найвищого рівня."
              </p>
              <p className="text-gray-900 font-semibold">— Олексій, Відень</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-block text-orange-600 font-semibold text-lg hover:text-orange-700"
            >
              {t('testimonials.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-orange-100 mb-8">{t('cta.subtitle')}</p>
          <Link
            href="/schedule"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
