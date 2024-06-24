import NextAuth from "next-auth";
import { PrismaAdapter} from "@next-auth/prisma-adapter";
import { prisma } from "./prima";
import GitHubProvider from "next-auth/providers/github";

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  
})    