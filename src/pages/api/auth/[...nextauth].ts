import { getRefreshToken } from './../../../utils/token';
import { request } from 'src/utils/request';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {},
        authorize: async (credentials: any) => {
          try {
            const res = await request(
              `mutation Login($email: String!, $password: String!) {login(loginUserInput: {email: $email, password: $password}) { accessToken, accessTokenExpires, user {id} }}`,
              {
                email: credentials?.login,
                password: credentials?.password,
              },
            );

            return res;
          } catch (error: any) {
            throw new Error(error.error);
          }
        },
      }),
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
      async jwt({ token, user }: any) {
        if (user?.login?.accessToken) {
          const { login } = user;

          token = { ...token, ...login };
          token.exp = login.accessTokenExpires;
        }

        if (Date.now() > token.exp) {
          return token;
        }

        return getRefreshToken(token);
      },
      async session({ session, token }) {
        if (token.accessToken) {
          session = { ...session, ...token };
        }

        return session;
      },
    },
  });
