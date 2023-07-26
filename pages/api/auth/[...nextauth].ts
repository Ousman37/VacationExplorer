import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

const prisma = new PrismaClient(); // Create a new instance of PrismaClient

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma), // Use the PrismaAdapter with the new PrismaClient instance
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '', // Provide a default empty string if the environment variable is undefined
      clientSecret: process.env.GITHUB_SECRET || '', // Provide a default empty string if the environment variable is undefined
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '', // Provide a default empty string if the environment variable is undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '', // Provide a default empty string if the environment variable is undefined
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || '', // Provide a default empty string if the environment variable is undefined
};

export default NextAuth(authOptions);
