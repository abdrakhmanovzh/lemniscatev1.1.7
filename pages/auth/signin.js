import Head from "next/head";
import React from "react";
import Link from "next/link";
import Login from "@/components/Login";

const Signin = () => {
    return (
        <>
            <Head>
                <title>Login | Lemniscate</title>
            </Head>
            <div className="flex flex-col h-full justify-center items-center">
                <Login />
                <p className="mt-4 text-lg">
                    Not registered?{"  "}
                    <Link href="/auth/signup" className="underline">
                        Click to Sign Up!
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Signin;
