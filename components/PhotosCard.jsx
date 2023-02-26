import React from 'react'

const PhotosCard = () => {
    return (
        <div className='flex flex-col w-full h-fit bg-white rounded-[0.25rem] border-[2.5px] border-black shadow-lg p-4 gap-4'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xl font-medium'>My Photos <span className='text-[#FF00F5]'>4</span></h1>
                <button className='rounded-[0.25rem] border-[2.5px] border-black p-1 hover:bg-[#FF00F5]'>Add a Photo</button>
            </div>
            <hr className='bg-black h-[0.1rem]' />
            <div className='grid gap-2 grid-cols-autoMinMax auto-rows-max'>
                <div className='bg-black rounded-[0.25rem] h-36'>asd</div>
                <div className='bg-black rounded-[0.25rem] h-24'>ads</div>
                <div className='bg-black rounded-[0.25rem] h-32'>xzcz</div>
                <div className='bg-black rounded-[0.25rem] h-20'>qwd</div>
                <div className='bg-black rounded-[0.25rem]'>sda</div>
                <div className='bg-black rounded-[0.25rem]'>sda</div>
            </div>
        </div>
    )
}

export default PhotosCard