import React from "react";
import Cookies from 'universal-cookie';
import {jwtDecode} from "jwt-decode"
export default function UserCard(){
    const cookie = new Cookies()
    const token = cookie.get('token')
    const decoded = jwtDecode(token)
return <div className="flex justify-center items-start">    
    {JSON.stringify(decoded)}
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