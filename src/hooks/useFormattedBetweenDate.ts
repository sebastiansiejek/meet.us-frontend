import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { getPolishDaysLabel } from 'src/utils/polishPluralLabels';

const useFormattedBetweenDate = (startDate: string, endDate: string) => {
  const { t, i18n } = useTranslation();
  const dateBetween = dayjs(dayjs(endDate).diff(dayjs(startDate)));
  const isPolishLanguage = i18n.language === 'pl';

  const formattedDateBetween =
    dateBetween.hour() > 24
      ? `${dateBetween.day()} ${
          isPolishLanguage ? getPolishDaysLabel(dateBetween.day()) : t('Days')
        }`
      : `${dateBetween.hour()} ${
          isPolishLanguage ? getPolishDaysLabel(dateBetween.hour()) : t('Hours')
        }`;

  return { date: formattedDateBetween };
};

export default useFormattedBetweenDate;
