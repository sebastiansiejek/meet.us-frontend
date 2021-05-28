import dayjs from 'dayjs';

export const getDateReadableFormat = (date: string | Date, locale = 'en') => {
  import(`dayjs/locale/${locale}.js`).then(() => dayjs.locale(locale));
  return dayjs(date).locale(locale).format('D MMMM YYYY HH:MM');
};
