import React from "react";
import UserCard from "../cards/userCard";
import UserNav from "../userNav";
export default function User(){
    return <div className="min-h-screen w-full flex flex-col justify-start items-center pt-20">
        <UserNav></UserNav>
        <p className="text-3xl font-semibold pb-5 flex justify-center w-full items-center ">Books</p>
        <UserCard></UserCard>
    </div>
}