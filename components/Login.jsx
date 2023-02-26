import React from 'react'
import { useFormik } from 'formik'

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            console.log(values)
        },
    })

    return (
        <div className='flex flex-col w-80 py-4 px-6 border-[2.5px] rounded-[0.25rem] border-black bg-white'>
            <h1 className='text-3xl text-center font-medium mb-4'>Sign In</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-2 border-black w-full px-2 py-1 outline-none"
                        />
                    </div>
                    <div>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-2 w-full px-2 py-1 outline-none border-black" />
                    </div>
                    <button type='submit' className='w-full text-lg font-medium py-[0.16rem] text-center bg-[#FF00F5] border-2 border-black rounded-[0.25rem]' onSubmit={formik.handleSubmit}>Enter</button>
                </div>
            </form>
        </div>
    )
}

export default Login