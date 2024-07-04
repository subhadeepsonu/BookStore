import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import SellerNav from "../sellerNav";
export default function SellerBook(){
    const cookie = new Cookies()
    const token = cookie.get('token')
    const decode = jwtDecode(token)
    const SellerBooksQuery = useQuery({
        queryKey:["seller Books"],
        queryFn: async ()=>{
            const data = await axios.get("http://localhost:3000/seller/books",{
                id:decode._id
            })
            return data.data
        }
    })
    if(SellerBooksQuery.isLoading){
        return <div className="h-screen w-full flex justify-center items-center">
            <SellerNav></SellerNav>
            loading...
        </div>
    }
    return <div className="h-screen w-full flex justify-center items-center">
        <SellerNav></SellerNav>
        {JSON.stringify(SellerBooksQuery.data)}
    </div>
}