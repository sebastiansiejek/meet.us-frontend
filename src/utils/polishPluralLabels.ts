export const getPolishHourLabel = (hours: number) => {
  if (hours === 1) {
    return 'godzina';
  }

  if (hours > 1 && hours < 5) {
    return 'godziny';
  }

  return 'godzin';
};

export const getPolishDaysLabel = (days: number) => {
  if (days === 1) {
    return 'dzień';
  }

  if (days > 1 && days < 5) {
    return 'dni';
  }

  return 'dni';
};
