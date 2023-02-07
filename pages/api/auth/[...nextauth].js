import Link from 'next/link';
import gql from 'graphql-tag';

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import { SIGNIN_MUTATION } from '../../../components/user/signin/Signin';

const options = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Sign in with Email',
      credentials: {
        identifier: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // if (credentials == null) return null;

        // try {
        //   // const { user, jwt } = await signIn({
        //   //   email: credentials.email,
        //   //   password: credentials.password,
        //   // });

        //   // console.log(user);
        //   return { ...user, jwt };
        // } catch (error) {
        //   console.log(error);
        //   return null;
        // }

        console.log(credentials);
        return user;
      },
    }),
  ],
  // pages: {
  //   signIn: '/user/signin',
  // },

  // database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    strategy: 'jwt',
  },
  debug: true,
  callbacks: {
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;

      return session;
    },
    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.access_token}`
        );

        const data = await response.json();

        token.jwt = data.jwt;
        token.id = data.user.id;
      }

      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
