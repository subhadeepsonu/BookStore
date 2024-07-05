import React from "react";
import UserNav from "../userNav";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
export default function UserOrder(){
    const cookie = new Cookies()
    const token = cookie.get('token')
    const value = jwtDecode(token)
    const QueryUSerOrders = useQuery({
        queryKey:["User Orders"],
        queryFn: async ()=>{
            const data = await axios.post("http://localhost:3000/user/orders",{
                id:value.id
            })
            return data.data
        }
    })
    if(QueryUSerOrders.isLoading){
        return <div className="h-screen w-full flex justify-center items-center">
           <UserNav></UserNav>
            Loading...
        </div>
    }
    if(QueryUSerOrders.isError){
        return <div className="h-screen w-full flex justify-center items-center">
            <UserNav></UserNav>
            {QueryUSerOrders.error}
        </div>
    }
    return <div className="h-screen w-full flex flex-col justify-center items-center">
        <UserNav></UserNav>
        {QueryUSerOrders.data.message.map((order)=>{
            return <div>
                {JSON.stringify(order)}
            </div>
        })}
    </div>
}