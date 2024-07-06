import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import UserNav from "../userNav"
export default function Wishlist(){
    const cookie = new Cookies()
    const token = cookie.get('token')
    const navigate = useNavigate()
    if(!token){
        navigate('/')
    }
    else{
        const haha = jwtDecode(token)
        const data= useQuery({
            queryKey:[],
            queryFn:async ()=>{
                const value = await axios.post('http://localhost:3000/user/wishlist',{
                    id:haha.id
                })
                return value.data
            },
            
        },
            )
        if(data.isLoading){
            return <div className="flex justify-center items-center h-screen w-full">
                Loading...
            </div>
        }
        if(data.isError){
            return <div className="flex justify-center items-center h-screen w-full">
                {data.error}
            </div>
        }
        return <div className="min-h-screen w-full flex flex-col justify-start pt-20 items-center">
            
            <UserNav></UserNav>
            <div className="grid grid-cols-4 gap-5">
            {data.data.message.map((wish)=>{
                return <div className="h-32 w-80 flex border-2 border-gray-300 rounded-lg">
                    <div className="h-32 w-32 ">
                        <img className="w-full h-full" src={wish.imgurl} alt="image">
                        </img>
                    </div>
                    <div className="flex justify-center h-full w-48 items-center">
                    <p>
                         {wish.bookname}
                    </p>
                    </div>
                </div>
            })}
            </div>
        </div>
    }
    
    
}