import Link from 'next/link'
export function Header() {
  return (
    <header className="flex items-center justify-between sticky top-0 z-10 bg-black/5 backdrop-blur-md p-4 rounded-md">
        <Link href="#" className="text-primary font-bold text-2xl">PizzaHub</Link>
        <nav>
          <ul className="flex gap-6 font-semibold items-center">
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
            <li>
              <Link href="/login" className="bg-primary text-alice px-4 py-2 rounded">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}