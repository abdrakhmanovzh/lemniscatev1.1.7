import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/lemniscate.svg'

const Navbar = ({ user }) => {
    return (
        <div className='flex flex-row flex-initial w-full justify-between h-fit py-3 px-12 lg:px-56 border-b-[3px] border-black'>
            <Link href='/' className='flex items-center'>
                <div className='flex flex-row gap-2 items-center bg-[#FF00F5] p-2 border-[2.5px] rounded-[0.25rem] border-black shadow-lg'>
                    <Image src={Logo} alt='Logo' height={28} width={28} />
                    <h1 className='font-medium text-2xl mb-[0.1rem]'>LEMNISCATE</h1>
                </div>
            </Link>
            {user ? (<button className='text-lg font-semibold p-1 border-[2.5px] bg-[#FF00F5] rounded-[0.25rem] border-black shadow-lg'>LOGOUT</button>) : (<Link href='/auth/signin' className='flex items-center'>
                <p className='text-lg font-semibold p-1 border-[2.5px] bg-[#FF00F5] rounded-[0.25rem] border-black shadow-lg'>LOGIN</p>
            </Link>)}
        </div >
    )
}

export default Navbar