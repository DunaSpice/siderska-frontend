import { useTranslations } from 'next-intl';
import ScheduleClient from './ScheduleClient';

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'ru' }, { locale: 'en' }];
}

export default function Schedule() {
  return <ScheduleClient />;
}
