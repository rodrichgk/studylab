// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import { nextAuthOptions } from "@utils/auth"; // Adjust the import path as necessary

const handler = NextAuth(nextAuthOptions);

export {handler as GET, handler as POST};
