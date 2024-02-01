import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex p-7 w-full bg-[#faf6b3] justify-between">
      <div>
        <Link href="/" >TeenStreet Logo </Link>
      </div>
      <div>
        <div>
          <Link href="/newReport" >Nova Refeição</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar