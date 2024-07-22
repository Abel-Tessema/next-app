import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prismaClient";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'email', placeholder: 'Email'},
        password: {label: 'Password', type: 'password', placeholder: 'Password'},
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;
        const user = await prisma.user.findUnique({where: {email: credentials.email}});
        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);
        return passwordsMatch ? user : null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true
    })
  ],
  // session: {
  //   strategy: 'jwt'
  // }
};

export default authOptions;