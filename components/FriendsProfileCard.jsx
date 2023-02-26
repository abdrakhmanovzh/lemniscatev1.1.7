import React from 'react'

const FriendsProfileCard = () => {
    return (
        <div className='flex flex-col w-full bg-white border-[2.5px] border-black rounded-[0.25rem] p-4'>
            <h1 className='text-2xl font-medium px-1'>Friends</h1>
            <div className='flex flex-col h-full justify-between'>
                <p className='px-[0.35rem] mt-1 rounded-t-[0.25rem] border-b-[2.5px] hover:bg-[#FF00F5] border-black'>Jane Doe</p>
                <p className='px-[0.35rem] rounded-t-[0.25rem] border-b-[2.5px] hover:bg-[#FF00F5] border-black'>Janne Dee</p>
                <p className='px-[0.35rem] rounded-t-[0.25rem] border-b-[2.5px] hover:bg-[#FF00F5] border-black'>Jade Doe</p>
            </div>
        </div>
    )
}

export default FriendsProfileCard