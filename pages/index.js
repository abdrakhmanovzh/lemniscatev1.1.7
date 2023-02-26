import Head from "next/head";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Lemniscate</title>
                <meta name="description" content="Lemniscate - social media" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col h-full items-center">
                <div className="mt-28">
                    <h1 className="text-4xl text-center font-semibold text">
                        Welcome to Lemniscate
                    </h1>
                    <Image
                        unoptimized
                        priority
                        src={Logo}
                        alt="Phone Pic"
                        height={250}
                        className="mr-4"
                    />
                </div>
                <div className="flex flex-row gap-12 items-center">
                    <Link
                        href="/auth/signin"
                        className="text-2xl font-semibold p-2 border-[2.5px] rounded-[0.25rem] border-black"
                    >
                        Sign In
                    </Link>
                    <p className="text-xl">or</p>
                    <Link
                        href="/auth/signup"
                        className="text-2xl font-semibold p-2 border-[2.5px] rounded-[0.25rem] border-black"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}
