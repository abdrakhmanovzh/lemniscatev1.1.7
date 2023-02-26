import React from 'react'
import Link from 'next/link'

const PhotosProfileCard = () => {
    return (
        <div className='flex flex-col w-[58%] bg-white h-fit border-[2.5px] border-black rounded-[0.25rem] p-4'>
            <div className='flex flex-row gap-2'>
                <div className='h-24 w-24 bg-black rounded-[0.25rem]'></div>
                <div className='h-24 w-24 bg-black rounded-[0.25rem]'></div>
                <div className='h-24 w-24 bg-black rounded-[0.25rem]'></div>
                <div className='h-24 w-24 bg-black rounded-[0.25rem]'></div>
            </div>
            <div className='flex flex-row justify-between mt-4 gap-2'>
                <Link href='/photos' className='w-full text-center bg-[#FF00F5] border-[2.5px] border-black font-medium rounded-[0.25rem]'>SHOW ALL</Link>
                <Link href='#' className='w-full text-center bg-[#FF00F5] border-[2.5px] border-black font-medium rounded-[0.25rem]'>UPLOAD A PHOTO</Link>
            </div>
        </div>
    )
}

export default PhotosProfileCard