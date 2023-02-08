import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Email',
      type: 'credentials',

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
            {
              identifier: email,
              password: password,
            }
          );
          const user = await data;

          console.log(user);

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        if (account.provider !== 'credentials') {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
          );
          const data = await response.json();

          token.jwt = data.jwt;
          token.id = data.user.id;
        } else {
          token.jwt = user.jwt;
          token.id = user.user.id;
        }
      }

      return token;
    },
  },

  pages: {
    signIn: '/auth/signin',
  },
};

const Auth = (req, res) => NextAuth(req, res, authOptions);

export default Auth;
