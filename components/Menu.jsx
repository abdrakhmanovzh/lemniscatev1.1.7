import React from 'react'
import Link from 'next/link'
import { CgProfile, CgFeed } from 'react-icons/cg'
import { BiBookmark } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'

const Menu = () => {
    return (
        <div className="flex flex-col items-center w-[11.4rem] gap-1 text-lg font-medium">
            <Link href="/profile" className="w-full border-[2.5px] rounded-[0.25rem] border-black shadow-lg">
                <div className="flex flex-row gap-2 justify-start items-center bg-white hover:bg-[#FF00F5] -md p-2">
                    <CgProfile />
                    MY PROFILE
                </div>
            </Link>
            <Link href="/feed" className="w-full border-[2.5px] rounded-[0.25rem] border-black shadow-lg">
                <div className="flex flex-row gap-2 justify-start items-center bg-white hover:bg-[#FF00F5] -md p-2">
                    <CgFeed />
                    FEED
                </div>
            </Link>
            <Link href="/friends" className="w-full border-[2.5px] rounded-[0.25rem] border-black shadow-lg">
                <div className="flex flex-row gap-2 justify-start items-center bg-white hover:bg-[#FF00F5] -md p-2">
                    <FaUserFriends />
                    FRIENDS
                </div>
            </Link>
            <Link href="/photos" className="w-full border-[2.5px] rounded-[0.25rem] border-black shadow-lg">
                <div className="flex flex-row gap-2 justify-start items-center bg-white hover:bg-[#FF00F5] -md p-2">
                    <MdOutlinePhotoSizeSelectActual />
                    PHOTOS
                </div>
            </Link>
            <Link href="/liked" className="w-full border-[2.5px] rounded-[0.25rem] border-black shadow-lg">
                <div className="flex flex-row gap-2 justify-start items-center bg-white hover:bg-[#FF00F5] -md p-2">
                    <BiBookmark />
                    LIKED
                </div>
            </Link>
        </div>
    )
}

export default Menu