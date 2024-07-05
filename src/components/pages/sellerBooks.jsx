import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import SellerNav from "../sellerNav";
import { useNavigate } from "react-router-dom";
import BookCard from "../cards/bookCard";
export default function SellerBook(){
    const navigate = useNavigate()
    const cookie = new Cookies()
    const token = cookie.get('token')
    const decode = jwtDecode(token)
    const SellerBooksQuery = useQuery({
        queryKey:["seller Books"],
        queryFn: async ()=>{
            const data = await axios.post("http://localhost:3000/seller/books",{
                id:decode.id
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
    return <div className="h-screen w-full flex justify-center items-start pt-20">
        <SellerNav></SellerNav>
        <button className="bg-black text-white px-3 py-2 rounded-lg flex justify-center items-center fixed bottom-4 right-5" onClick={()=>{
            navigate("/addproduct")
        }}>Add product</button>
        <div className="grid grid-cols-4"> 
            {SellerBooksQuery.data.message.map(()=>{
                return <BookCard></BookCard>
            })}
        </div>
    </div>
}