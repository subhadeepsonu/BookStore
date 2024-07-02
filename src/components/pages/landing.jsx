import React from 'react'
import Navbar from '../navbar'
import BookCard from '../cards/bookCard'

export default function Landing(){
    return <div className='h-screen w-full flex flex-col justify-center items-center'>
        <Navbar></Navbar>
        <div>
            <BookCard></BookCard>
        </div>
    </div>
}