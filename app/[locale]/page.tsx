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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-warm-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href={`/${locale}/schedule`}
                className="btn btn-primary"
              >
                {t('hero.cta')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="btn btn-secondary"
              >
                {t('navigation.about')}
              </Link>
            </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-primary font-semibold text-lg mb-2">{t('about.headline')}</p>
            <h2 className="mb-6">{t('about.title')}</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              {t('about.preview')}
            </p>
          </div>
          <div className="text-center">
            <Link
              href={`/${locale}/about`}
              className="btn btn-primary"
            >
              {t('about.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gradient-to-br from-cream to-warm-white">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="mb-4">{t('services.title')}</h2>
            <p className="text-lg text-text-secondary">{t('services.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card stagger-item">
              <h3 className="text-2xl font-semibold mb-4 text-text-primary">{t('services.online')}</h3>
              <p className="text-text-secondary mb-6">Регулярні групові заняття в прямому ефірі</p>
              <Link 
                href={`/${locale}/services`}
                className="text-primary font-semibold hover:text-primary-dark"
              >
                Докладніше →
              </Link>
            </div>
            <div className="card stagger-item">
              <h3 className="text-2xl font-semibold mb-4 text-text-primary">{t('services.personal')}</h3>
              <p className="text-text-secondary mb-6">Індивідуальний підхід до вашої практики</p>
              <Link 
                href={`/${locale}/services`}
                className="text-primary font-semibold hover:text-primary-dark"
              >
                Докладніше →
              </Link>
            </div>
            <div className="card stagger-item">
              <h3 className="text-2xl font-semibold mb-4 text-text-primary">{t('services.retreats')}</h3>
              <p className="text-text-secondary mb-6">Тижневі йога-ретрити в Туреччині</p>
              <Link 
                href={`/${locale}/services`}
                className="text-primary font-semibold hover:text-primary-dark"
              >
                Докладніше →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/services`}
              className="btn btn-primary"
            >
              {t('services.seeAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-background">
        <div className="container max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="mb-6">{t('philosophy.title')}</h2>
          <blockquote className="text-2xl md:text-3xl text-primary font-medium italic mb-8">
            "{t('philosophy.quote')}"
          </blockquote>
          <p className="text-lg text-text-secondary leading-relaxed">
            {t('philosophy.description')}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-to-br from-cream to-warm-white">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="mb-8">{t('testimonials.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card stagger-item">
              <p className="text-text-secondary mb-4 italic">
                "Заняття з Оленою змінили моє ставлення до йоги. Це не просто вправи, а справжня робота з собою."
              </p>
              <p className="text-text-primary font-semibold">— Марія, Київ</p>
            </div>
            <div className="card stagger-item">
              <p className="text-text-secondary mb-4 italic">
                "19 років досвіду відчувається в кожному русі, кожній підказці. Професіонал найвищого рівня."
              </p>
              <p className="text-text-primary font-semibold">— Олексій, Відень</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href={`/${locale}/testimonials`}
              className="text-primary font-semibold text-lg hover:text-primary-dark"
            >
              {t('testimonials.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-white opacity-90 mb-8">{t('cta.subtitle')}</p>
          <Link
            href={`/${locale}/schedule`}
            className="btn bg-white text-primary hover:bg-cream hover:text-primary-dark"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
