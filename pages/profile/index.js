import Menu from "@/components/Menu";
import Head from "next/head";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import PhotosProfileCard from "@/components/PhotosProfileCard";
import FriendsProfileCard from "@/components/FriendsProfileCard";

const Profile = () => {
    return (
        <>
            <Head>
                <title>My Profile</title>
            </Head>
            <div className="flex flex-row h-full w-full justify-between px-56 py-6">
                <Menu />
                <div className="flex flex-col w-3/4 h-full m-0 p-0 gap-y-6">
                    <ProfileCard />
                    <div className="flex flex-row w-full gap-x-6">
                        <PhotosProfileCard />
                        <FriendsProfileCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
