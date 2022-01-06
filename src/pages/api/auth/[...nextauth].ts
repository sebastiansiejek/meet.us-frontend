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
              `mutation Login($email: String!, $password: String!) {login(loginUserInput: {email: $email, password: $password}) { accessToken }}`,
              {
                email: credentials?.login,
                password: credentials?.password,
              },
            );

            return res;
          } catch (error: any) {
            throw new Error(error.data.message);
          }
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }: any) {
        if (user?.login?.accessToken) {
          const { accessToken } = user.login;

          token.accessToken = accessToken;
          token.jwt = accessToken;
        }

        return Promise.resolve(token);
      },
      async session({ session, token }) {
        if (token.accessToken) {
          const { accessToken } = token;
          session.accessToken = accessToken;
          session.jwt = accessToken;
        }

        return Promise.resolve(session);
      },
    },
  });
