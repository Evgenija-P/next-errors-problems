import Credentials from "next-auth/providers/credentials";
import axios from "axios"; // Використовуємо axios або fetch для запитів
import { baseURL } from "./configUrl";

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

          // Запит до бекенду на авторизацію
          const response = await axios.post(`${baseURL}/auth/login`, {
            email: credentials.email,
            password: credentials.password,
          });

          const { data } = response.data;
          console.log("data-----", data);

          if (data) {
            return {
              email: data.user.email,
              token: data.token,
            };
          }

          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Callback для JWT, зберігаємо токен у JWT
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token; // Записуємо токен
      }
      return token;
    },

    // Callback для сесії, додаємо токен у сесію
    async session({ session, token }) {
      session.user.token = token.accessToken; // Додаємо токен у сесію
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

// import Credentials from "next-auth/providers/credentials";
// import { users } from "@/data/users";

// export const authConfig = {
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email", required: true },
//         password: { label: "Password", type: "password", required: true },
//       },
//       async authorize(credentials) {
//         try {
//           if (!credentials?.email || !credentials.password) return null;

//           const currentUser = users.find(user => user.email === credentials.email);

//           console.log("currentUser_______", currentUser);
//           if (currentUser && currentUser.password === credentials.password) {
//             const { password, ...userWithoutPass } = currentUser;
//             return userWithoutPass;
//           }

//           return null;
//         } catch (error) {
//           console.error("Authorization error:", error);
//           return null;
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/signin",
//   },
//   // basePath: "/api/auth", //
// };
