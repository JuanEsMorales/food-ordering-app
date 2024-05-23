"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [creatingUser, setCreatingUser] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!password || !email) {
      return
    }
    setCreatingUser(true)
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()
      if (data.status === "error") {
        if (data.code === 11000) {
          setError(true)
          setErrorText("Email already exists")
        }
        throw new Error(data.message)
      }
      setCreatingUser(false)
      setUserCreated(true)
      setEmail("")
      setPassword("")
    } catch (error) {
      console.log(error)
      setCreatingUser(false)
      setError(true)
    }
    
  }
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl'>Register</h1>
      {
        userCreated && (
          <p className='text-center my-4'>
            User created successfully. Now you can {<Link href='/login' className="text-primary underline">login</Link>}
          </p>
        )
      }
      {
        error && errorText && (
          <p className='text-center my-4 text-red-500'>
            {errorText}
          </p>
        )
      } 
      {
        error && !errorText && (
          <p className='text-center my-4 text-red-500'>
            There was an error creating the user. Please try again.
          </p>
        )
      }
      <form className='block max-w-xs mx-auto' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          id=''
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type='password'
          name='password'
          id=''
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type='submit' className='' style={{ borderWidth: "0" }} disabled={creatingUser}>
          Register
        </button>
        <p className='my-4 text-center text-gray-500'>or login with</p>
        <button className='flex gap-2 justify-center items-center' disabled={creatingUser}>
          <Image
            src={"/google.png"}
            alt={"login with google"}
            width={24}
            height={24}
          />
          Google
        </button>
        <div>
          <p className='text-center text-gray-500 my-4'>
            Already have an account? <br />
            <Link href='/login' className='text-primary underline'>
              Login here
            </Link>
          </p>
        </div>
      </form>
    </section>
  )
}
