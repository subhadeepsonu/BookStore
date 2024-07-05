import React from "react";
import SellerNav from "../sellerNav";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
export default function SellerOrder(){
    const cookie = new Cookies()
    const token = cookie.get('token')
    const value = jwtDecode(token)
    const QuerySellerOrders = useQuery({
        queryKey:["seller orders"],
        queryFn:async ()=>{
            const data = await axios.post("http://localhost:3000/seller/orders",{
                id:value.id
            })
            return data.data
        }
    })
    if(QuerySellerOrders.isLoading){
        return <div className="h-screen w-full flex justify-center items-center">
            <SellerNav></SellerNav>
        Loading...
    </div>
    }
    if(QuerySellerOrders.isError){
        return <div className="h-screen w-full flex justify-center items-center">
        {QuerySellerOrders.error}
    </div>
    }
    return <div className="h-screen w-full flex justify-center items-center">
        <SellerNav></SellerNav>
        
        {JSON.stringify(QuerySellerOrders.data.message)}
    </div>
}