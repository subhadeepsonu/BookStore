import React from "react";
import AdminNav from "../adminNav";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function Adminorder(){
    const QueryAdminOrders = useQuery({
        queryKey:["Admin orders"],
        queryFn:async ()=>{
            const data = await axios.get("http://localhost:3000/admin/orders")
            return data.data
        }
    })
    if(QueryAdminOrders.isLoading){
        return <div className="h-screen w-full flex justify-center items-center">
            <AdminNav></AdminNav>
            Loading...
        </div>
    }
    return <div className="h-screen w-full flex justify-center items-center">
        <AdminNav></AdminNav>
        {JSON.stringify(QueryAdminOrders.data)}
    </div>
}