import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Changa } from 'next/font/google'

const changa = Changa({ subsets: ['latin'] })

const Layout = ({ children }) => {
    return (
        <div className={`h-screen w-screen flex flex-col bg-[#E3DFF2] ${changa.className}`}>
            <Navbar />
            <div className='flex-auto'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout