'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('navigation');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/schedule`, label: t('schedule') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const languages = [
    { code: 'uk', label: 'UA' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = newLocale;
    return '/' + segments.join('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 group"
          >
            <div className="text-2xl md:text-3xl font-serif font-semibold text-primary transition-colors group-hover:text-primary-dark">
              Olena Siderska
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r border-gray-300 pr-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={getLocalizedPath(lang.code)}
                  className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                    locale === lang.code
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
            <Link
              href={`/${locale}/schedule`}
              className="btn btn-primary"
            >
              {t('bookClass')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-base font-medium rounded transition-colors ${
                    pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between px-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={getLocalizedPath(lang.code)}
                    className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                      locale === lang.code
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
              <Link
                href={`/${locale}/schedule`}
                className="btn btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('bookClass')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
