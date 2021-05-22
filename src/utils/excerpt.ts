export const getExcerpt = (text: string, pad: number) => {
  if (text.length > pad) return text.substr(0, pad) + '...';
  return text;
};
