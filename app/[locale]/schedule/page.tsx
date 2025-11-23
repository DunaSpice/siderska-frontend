'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const API_URL = 'https://ruaucpppjj.execute-api.us-east-1.amazonaws.com/prod';

export default function Schedule() {
  const t = useTranslations('booking');
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/classes`)
      .then(res => res.json())
      .then(data => {
        setClasses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center">{t('title')}</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : classes.length === 0 ? (
          <p className="text-center text-gray-600">No classes available yet.</p>
        ) : (
          <div className="space-y-4">
            {classes.map((cls: any) => (
              <div key={cls.classId} className="p-6 border rounded-lg">
                <h3 className="text-2xl font-semibold">{cls.title}</h3>
                <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
                  {t('book')}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
