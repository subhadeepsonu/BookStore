import { useQuery } from "@tanstack/react-query";
import AdminNav from "../adminNav";
import axios from "axios";

export default function AdminUser(){
    const data =  useQuery({
        queryKey:["user data"],
        queryFn:async ()=>{
            const data = await axios.get("http://localhost:3000/admin/user")
            return data.data
        }
    })
    if(data.isLoading){
        return <div className="h-screen  w-full flex justify-center items-center">
            <AdminNav></AdminNav>
        Loading...
    </div>
    }
    if(data.isError){
        return <div className="h-screen  w-full flex justify-center items-center">
            {data.error}
        </div>
    }
    return <div className="min-h-screen w-full pt-20 flex  justify-center items-start">
    <AdminNav></AdminNav>
    <div className="  grid grid-cols-4 gap-5">
    {data.data.message.map((user)=>{
        return <div className=" flex justify-center items-center flex-col h-32 w-80  rounded-lg border-2 border-gray-100 shadow-sm ">
            <p className="font-bold text-xl">{user.username}</p>
            <p>{user.email}</p>
        </div>
    })}
    </div>
</div>
}