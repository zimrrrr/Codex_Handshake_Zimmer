import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

import { env } from "@/lib/env";

export const authConfig: NextAuthConfig = {
  providers: env?.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
    ? [
        Google({
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              scope:
                "openid email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/gmail.readonly",
              access_type: "offline",
              prompt: "consent"
            }
          }
        })
      ]
    : [],
  pages: {
    signIn: "/signin"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
      }

      return session;
    }
  }
};
