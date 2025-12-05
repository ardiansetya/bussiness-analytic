import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { env } from "@/env";
import { db } from "@/server/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
  }),
  emailAndPassword: {
    enabled: true,
  },
  // session: {
  // 	expiresIn: 60 * 60 * 24 * 7, // 7 days
  //     updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
  // },
  socialProviders: {
    github: {
      clientId: env.BETTER_AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
      redirectURI: "http://localhost:3000/api/auth/callback/github",
    },
    google: {
      clientId: env.AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET as string,
      redirectURI: "http://localhost:3000/api/auth/callback/google",
    },
  },
});

export type Session = typeof auth.$Infer.Session;
