import React from 'react'
import Link from 'next/link'

const FriendsCard = () => {
    return (
        <div className='bg-white w-2/3 rounded-[0.25rem] border-[2.5px] border-black shadow-lg p-4'>
            <div className='flex flex-row gap-2'>
                <div className='w-20 h-20 rounded-full bg-black'></div>
                <div className='flex flex-col pt-2 pl-3'>
                    <h1 className='font-medium text-xl'>Jade Doe</h1>
                    <Link href="#" className="text-sm text-[#FF00F5]">Write a message</Link>
                </div>
            </div>
        </div>
    )
}

export default FriendsCard