import { request } from './request';

export const getRefreshToken = async (token: { accessToken: string }) => {
  const { accessToken } = token;

  try {
    const res = await request(
      `mutation refresh($accessToken: String!) {refresh(refreshToken: {token: $accessToken}) { accessToken, accessTokenExpires }}`,
      {
        accessToken,
      },
    );

    const { refresh } = res;
    return { ...token, ...refresh, exp: refresh.accessTokenExpires };
  } catch (error: any) {
    throw new Error(error.error);
  }
};
