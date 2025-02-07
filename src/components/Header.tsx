import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <main className='bg-[#5d737e]'>
        <section className='max-w-[1440px] mx-auto py-2 grid grid-cols-2 lg:py-4 px-2 lg:px-3'>
            <div>
            <h1 className='text-4xl font-bold text-white capitalize text-left'>AVION Admin Dashboard</h1>
            </div>
            <div className='flex justify-end items-center'> 
            <ul className='flex gap-10 text-2xl text-white'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/orders'>Orders</Link>
                </li>
                <li>
                    <Link href='/'>Home</Link>
                </li>
            </ul>
            </div>
        </section>
    </main>
  )
}

export default Header