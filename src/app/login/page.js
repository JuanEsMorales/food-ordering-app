"use client"

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginInProgress, setLoginInProgress] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!password ||!email) {
      return
    }
    try {
      setLoginInProgress(true)
      await signIn('credentials', { email, password })
    } catch (error) {
      console.log(error)
    }
    setLoginInProgress(false)
  }
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl'>Login</h1>
      <form className='block max-w-xs mx-auto' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          id=''
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          type='password'
          name='password'
          id=''
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button type='submit' style={{ borderWidth: "0" }} disabled={loginInProgress}>
          Login
        </button>
        <p className='my-4 text-center text-gray-500'>or login with</p>
        <button className='flex gap-2 justify-center items-center' disabled={loginInProgress}>
          <Image
            src={"/google.png"}
            alt={"login with google"}
            width={24}
            height={24}
          />
          Google
        </button>
      </form>
    </section>
  );
}