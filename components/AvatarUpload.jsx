import React, { useState } from 'react'

const AvatarUpload = () => {
    const [touched, setTouched] = useState(false)
    const [uploading, setUploading] = useState(false)

    return (
        <label className='border-2 rounded-[0.25rem] border-black w-full outline-none cursor-pointer text-lg'>
            {touched ? (uploading ? <p className='m-2'>Uploading...</p> : <p className='m-2 bg-[#FF00F5] rounded-[0.25rem] px-2'>Uploaded.</p>) : <p className='m-2 text-gray-400'>Click to add Profile Photo</p>}
            <input
                type="file"
                name="avatarUrl"
                placeholder="Insert Image"
                className="hidden w-full"
                disabled={touched}
            />
        </label>
    )
}

export default AvatarUpload