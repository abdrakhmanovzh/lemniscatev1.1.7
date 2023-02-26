import Menu from "@/components/Menu";
import Head from "next/head";
import React from "react";
import PostCard from "@/components/PostCard";

const Saved = () => {
    return (
        <>
            <Head>
                <title>Liked Posts</title>
            </Head>
            <div className="flex flex-row h-full w-full justify-between px-56 py-6">
                <Menu />
                <div className="flex flex-col w-3/4 h-full m-0 p-0 gap-y-6">
                    <PostCard />
                </div>
            </div>
        </>
    );
};

export default Saved;
