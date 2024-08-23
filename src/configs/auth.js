import Credentials from "next-auth/providers/credentials";
import { users } from "@/data/users";

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) return null;

          const currentUser = users.find(user => user.email === credentials.email);
          console.log("currentUser_______", currentUser);
          if (currentUser && currentUser.password === credentials.password) {
            const { password, ...userWithoutPass } = currentUser;
            return userWithoutPass;
          }

          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  // basePath: "/api/auth", //
};
