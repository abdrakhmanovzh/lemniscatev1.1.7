import React from "react";
import Head from "next/head";
import Link from "next/link";
import Register from "@/components/Register";

const Signup = () => {
    return (
        <>
            <Head>
                <title>Register | Lemniscate</title>
            </Head>
            <div className="flex flex-col h-full justify-center items-center">
                <Register />
                <p className="mt-4 text-lg">
                    Already have an account?{"  "}
                    <Link href="/auth/signin" className="underline">
                        Click to Sign In!
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Signup;
