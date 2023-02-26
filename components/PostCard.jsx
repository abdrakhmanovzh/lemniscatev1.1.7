import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

const PostCard = () => {
    return (
        <div className='flex flex-col h-fit w-2/3 bg-white rounded-[0.25rem] border-[2.5px] border-black shadow-lg p-4 gap-2'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xl font-medium'>Jane Doe</h1>
                <p className='text-sm text-gray-400'>2 hours ago</p>
            </div>
            <div className='flex flex-col gap-1'>
                <p>Title of a post</p>
                <div className='bg-[#FF00F5] h-32 rounded-[0.25rem]'></div>
            </div>
            <div className='flex flex-row justify-start pt-3 gap-2'>
                <div className='flex flex-row h-full w-full justify-center items-center border-[2.5px] border-black bg-[white] px-4 py-1 gap-1 rounded-[0.25rem] text-center'>
                    <AiFillHeart />
                    <p className='text-sm mt-[0.1rem]'>322</p>
                </div>
            </div>

        </div>
    )
}

export default PostCard