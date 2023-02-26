import Menu from "@/components/Menu";
import Head from "next/head";
import React from "react";
import FriendsCard from "@/components/FriendsCard";

const Friends = () => {
    return (
        <>
            <Head>
                <title>My Friends</title>
            </Head>
            <div className="flex flex-row h-full w-full justify-between px-56 py-6">
                <Menu />
                <div className="flex flex-col w-3/4 h-full m-0 p-0 gap-y-6">
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                </div>
            </div>
        </>
    );
};

export default Friends;
