import React from "react";
import { Link } from "react-router-dom";
export default function UserNav(){
    return <div className="fixed bg-black text-white top-0 h-16 flex justify-between items-center  w-full ">
        <div className="h-full w-1/6 flex justify-center items-center text-3xl font-bold">
            BookNest
        </div>
        <div className="w-1/3 h-full flex justify-around items-center">
            <Link to={"/user"}>
            Books
            </Link>
            <Link to={"/userorders"}>
            Orders
            </Link>
            <Link to={"/cart"}>
            Cart
            </Link>
            <button className="px-3 py-1 text-black rounded-md flex justify-center items-center bg-white">
                Logout
            </button>
        </div>
    </div>
}