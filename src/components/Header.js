"use client";

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
export function Header() {
  const session = useSession()
  console.log(session)
  return (
    <header className="flex items-center justify-between sticky top-0 z-10 bg-black/5 backdrop-blur-md p-4 rounded-md">
        <nav>
          <ul className="flex gap-6 font-semibold items-center">
            <Link href="/" className="text-primary font-bold text-2xl">PizzaHub</Link>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {
          session.status === "authenticated" ? (
            <div className="flex gap-3 items-center">
              <button className="bg-primary text-alice px-4 py-2 rounded" onClick={() => signOut()}>
                Logout
              </button>
            </div>
          ) : (
            <nav>
              <ul className='flex gap-3 font-semibold items-center'>
              <li>
                  <Link href="/login" >
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="bg-primary text-alice px-4 py-2 rounded">
                    Register
                  </Link>
                </li>
              </ul>
            </nav>
          )
        }
      </header>
  )
}