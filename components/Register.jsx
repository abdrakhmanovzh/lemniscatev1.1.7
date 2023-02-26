import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import AvatarUpload from './AvatarUpload';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            fullname: "",
            status: "",
        },
        onSubmit: async (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            fullname: yup.string()
                .max(25, 'Must be 25 characters or less')
                .required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup.string().required('Required').min(6, 'Must be at least 6 characters')
        })
    });

    return (
        <div className='flex flex-col w-80 py-4 px-6 border-[2.5px] rounded-[0.25rem] border-black bg-white'>
            <h1 className='text-3xl text-center font-medium mb-4'>Sign Up</h1>
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
                        {formik.touched.email && formik.errors.email ? (<div className='bg-black px-2 py-1 text-white text-lg text-center'>{formik.errors.email}</div>) : null}
                    </div>
                    <div>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-2 w-full px-2 py-1 outline-none border-black" />
                        {formik.touched.password && formik.errors.password ? (<div className='bg-black px-2 py-1 text-white text-lg text-center'>{formik.errors.password}</div>) : null}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-2 border-black w-full px-2 py-1 outline-none"
                        />
                        {formik.touched.fullname && formik.errors.fullname ? (<div className='bg-black px-2 py-1 text-white text-lg text-center'>{formik.errors.fullname}</div>) : null}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="status"
                            placeholder="Status text"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-2 border-black w-full px-2 py-1 outline-none"
                        />
                    </div>
                    <AvatarUpload />
                    <button type='submit' className='w-full p-[0.16rem] font-medium text-lg text-center bg-[#FF00F5] border-2 border-black' onSubmit={formik.handleSubmit}>Enter</button>
                </div>
            </form>
        </div>
    )
}

export default Register