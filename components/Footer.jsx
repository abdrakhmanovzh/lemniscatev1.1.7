import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex flex-row justify-between px-12 lg:px-56 flex-initial text-xs py-4 border-t-2 border-black'>
            <div className='flex flex-row'>
                <p className='mr-8'>Lemniscate 2023 ©</p>
                <p>About</p>
            </div>
            <div className='flex flex-row'>
                <p>Rules</p>
                <p className='ml-8'>Careers</p>
                <p className='ml-8'>For Developers</p>
            </div>
        </div>
    )
}

export default Footer