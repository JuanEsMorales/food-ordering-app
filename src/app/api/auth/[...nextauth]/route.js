import { User } from "@/app/models/User"
import { compareSync } from "bcrypt"
import mongoose from "mongoose"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {email, password} = credentials
        // Return the user if they have a valid email and password
        mongoose.connect(process.env.MONGO_URL)
        const user = await User.findOne({email})
        const userExists = user && compareSync(password, user.password)
        console.log(userExists)
        if (userExists) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }