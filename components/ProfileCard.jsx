import React from 'react'
import Image from 'next/image'
import UserAvatar from '@/public/images/avatar.png'

const ProfileCard = () => {
    return (
        <div className='flex flex-col w-full h-[16.3rem] bg-white rounded-[0.25rem] border-[2.5px] border-black shadow-lg p-4'>
            <div className='flex flex-row h-full items-center pl-10'>
                <Image unoptimized src={UserAvatar} height={208} width={208} alt="sadge" className='rounded-[0.25rem] h-48 w-48' />
                <div className='flex flex-col w-fit h-full mx-auto py-8'>
                    <h1 className='text-5xl font-medium text-center'>John Doe</h1>
                    <div className='border-[2.5px] border-black rounded-[0.25rem] my-auto'>
                        <h1 className='font-semibold text-xl p-2 text-center'>I am an average user</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard