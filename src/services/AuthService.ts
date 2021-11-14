import Cookies from 'js-cookie';

export const tokenCookieName = 'token';

export const getCookieToken = () => {
  return Cookies.get(tokenCookieName) || '';
};

export const setCookieToken = (token: string) => {
  return Cookies.set(tokenCookieName, token, {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
};

export const removeCookieToken = () => {
  return Cookies.remove(tokenCookieName);
};
