import React from 'react';
import Navbar from '../navbar';
import BookCard from '../cards/bookCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const datafetch = async () => {
    const response = await axios.get("http://localhost:3000/");
    return response.data;
};

export default function Landing() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["books"],
        queryFn: datafetch,
    });

    if (isLoading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            Loading...
        </div>;
    }
    if (isError) {
        return <div className='h-screen w-full flex justify-center items-center'>
            {error.message || JSON.stringify(error)}
        </div>;
    }
    return <div className='h-screen w-full flex flex-col justify-center items-center'>
        <Navbar />
        <div className='text-black'>
            {JSON.stringify(data)}  
        </div>
    </div>;
}
