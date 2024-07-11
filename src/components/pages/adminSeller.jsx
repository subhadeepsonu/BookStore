import { useQuery } from "@tanstack/react-query";
import AdminNav from "../adminNav";
import axios from "axios";
export default function AdminSeller(){
    const data = useQuery({
        queryKey:["seller data"],
        queryFn:async ()=>{
            const data = await axios.get("http://localhost:3000/admin/seller")
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
        {data.data.message.map((seller)=>{
            return <div className=" flex justify-center items-center flex-col h-32 w-80  rounded-lg border-2 border-gray-100 shadow-sm ">
                <p className="font-bold text-xl">{seller.name}</p>
                <p>{seller.email}</p>
            </div>
        })}
        </div>
    </div>
}