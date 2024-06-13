import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "./env";
import { prisma } from "./prima";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  //secret: env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
// export default NextAuth(authOptions);
