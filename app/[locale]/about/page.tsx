import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'ru' }, { locale: 'en' }];
}

export default function About() {
  const t = useTranslations('about');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t('title')}</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">{t('subtitle')}</p>
          <p className="text-lg text-orange-600 font-semibold">{t('experience')}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{t('story.title')}</h2>
          
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Дитинство</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('story.childhood')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Початок практики</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('story.beginning')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Професійний шлях</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('story.professional')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Сьогодення</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('story.present')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none bg-orange-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Моя місія</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('story.mission')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t('credentials.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.experience')}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.nike')}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.president')}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.ntc')}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.director')}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.yogamania')}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">📱</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.students')}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="text-orange-600 text-3xl mr-4">🎥</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('credentials.videos')}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga23 Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">{t('yoga23.title')}</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">{t('yoga23.subtitle')}</p>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-12 rounded-2xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('yoga23.description')}
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ключові принципи:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span className="text-gray-700 text-lg">Практика без втоми — ефективність через усвідомленість</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span className="text-gray-700 text-lg">Робота з увагою — розвиток концентрації та присутності</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span className="text-gray-700 text-lg">Розвиток волі — формування внутрішньої сили</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span className="text-gray-700 text-lg">Системність — послідовний та збалансований підхід</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Family Yoga Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('family.title')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('family.description')}
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t('locations.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900">{t('locations.kyiv')}</h3>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900">{t('locations.vienna')}</h3>
            </div>

            <div className="p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
              <div className="text-4xl mb-4">🌆</div>
              <h3 className="text-xl font-bold text-gray-900">{t('locations.baku')}</h3>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold text-gray-900">{t('locations.turkey')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готові почати практику?</h2>
          <p className="text-xl text-orange-100 mb-8">Приєднуйтесь до наступного заняття</p>
          <Link
            href="/schedule"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition"
          >
            Подивитися розклад
          </Link>
        </div>
      </section>
    </main>
  );
}
