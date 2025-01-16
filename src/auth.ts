import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: credentials.username,
                password: credentials.password,
              }),
            }
          );

          if (!res.ok) {
            throw new Error("Invalid credentials");
          }

          const data = await res.json();

          console.log(data);

          return {
            email: data.id,
            name: data.nickname,
            image: data.image,
            ...data,
          };
        } catch (error) {
          throw new Error("Internal Server Error");
        }
      },
    }),
  ],
});
