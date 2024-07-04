import React from "react";
import Cookies from 'universal-cookie';
import {jwtDecode} from "jwt-decode"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function UserCard(){
    const cookie = new Cookies()
    const token = cookie.get('token')
    const decoded = jwtDecode(token)
    const BooksQuery = useQuery({
        queryKey:["All Books"],
        queryFn: async ()=>{
            const data = await axios.get("http://localhost:3000/user/books")
            return data.data
        }
    })
    if(BooksQuery.isLoading){
        return <div className="h-screen w-full flex justify-center items-center">
            Loading...
        </div>
    }
    if(BooksQuery.isError){
        return <div className="h-screen w-full flex justify-center items-center">
        Error
    </div>
    }
return <div className="flex justify-center items-start">    
    {JSON.stringify(BooksQuery.data)}
    <div className="min-h-screen w-full grid grid-cols-4 gap-5 ">
        {/* <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard> */}

    </div>
    </div>
}