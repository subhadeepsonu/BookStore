import React from "react";
import AdminNav from "../adminNav";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BookCard from "../cards/bookCard";
export default function AdminBooks(){
    const QueryAdminBooks = useQuery({
        queryKey:["Admin Books"],
        queryFn:async ()=>{
            const data = await axios.get("http://localhost:3000/admin/books")
            return data.data
        }
    })
    if(QueryAdminBooks.isLoading){
        return <div className="h-screen w-full flex justify-center items-center">
            <AdminNav></AdminNav>
        Loading...
    </div>
    }
    return <div className="h-screen w-full flex justify-center items-start pt-20">
        <AdminNav></AdminNav>
        <div className="grid grid-cols-4 gap-5">
        {QueryAdminBooks.data.message.map(()=>{
            return <BookCard></BookCard>
        })}
        </div>
    </div>
}