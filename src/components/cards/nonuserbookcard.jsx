import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { DeleteIcon, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"
export default function NonUserBookCard(props){
    const [admin,setAdmin] = useState(false)
    const queryclient = useQueryClient()
    const cookie = new Cookies()
    useEffect(()=>{
        const token = cookie.get('token')
        console.log(props.id)
        if(token){
            setAdmin(true)
        }
    },[])
    const MutateDelete = useMutation({
        mutationFn:async ()=>{
            const data = await axios.delete("http://localhost:3000/seller/delete",{
                data: { id: props.id }
            })
            return data.data
        },
        onSettled:(data,error)=>{
            console.log(data)
            console.log(props.id)
            queryclient.invalidateQueries({queryKey:[]})
        }
    })
    return <div className="w-80 h-[550px] relative  flex flex-col border-2 border-gray-300 rounded-lg">
        <div onClick={()=>{
            MutateDelete.mutate()
        }} className={`absolute top-1 right-1 cursor-pointer ${(admin)?"":"hidden"}`}><Trash></Trash></div>
        <div className="w-80 h-3/5">
        <img className="w-80 h-full object-contain rounded-t-lg" src={props.imgurl} alt="image">
        </img>
        </div>
        <div className=" font-semibold w-80 h-1/5 flex flex-col justify-around items-start pl-2">
        <p >
        Name: {props.name}
        </p>
        <p>
            Author: {props.author}
        </p>
        <p>
            price:{props.price}
        </p>
        </div>
        <div className="h-1/5 w-full  pl-2">
           <p>discription: {props.discription}</p>
        </div>
    </div>
}