import { User } from "@/app/models/User";
import mongoose from "mongoose"
import { hashSync } from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    body.password =  hashSync(body.password, 10)
    mongoose.connect(process.env.MONGO_URL)
    const createdUser = await User.create(body)
    return Response.json(createdUser)
  } catch (error) {
    return Response.json({ status: "error", code: error.code, message: error.message})
  }
}