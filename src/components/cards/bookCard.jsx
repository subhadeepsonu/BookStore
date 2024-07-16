import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'universal-cookie'
export default function BookCard(props){
    const cookie =  new Cookies()
    const token = cookie.get('token')
    const decoded = jwtDecode(token)
    const MutateWishlist = useMutation({
        mutationFn: async ()=>{
            const data = await axios.post("http://localhost:3000/user/Addwishlist",{
                bookname:props.name,
                imgurl:props.imgurl,
                user:decoded.id
            })
            return data.data
        },
        onSettled:(data)=>{
            if(data.success){
                alert("done")
            }
            else{
                alert("somethingg went wrong")
            }
        }
    })
    const MutateOrder = useMutation({
        mutationFn:async ()=>{
            const data = await axios.post("http://localhost:3000/user/addOrders",{
                seller:props.seller,
                books:props.id,
                user:decoded.id,
                bookname:props.name,
                imgurl:props.imgurl
            })
            return data.data
        },
        onSettled:(data,error)=>{
            if(data.success){
                alert("order placed")
            }
            if(!data.success){
                alert(data.message)
            }
            if(error){
                alert(error)
            }
        }
    })
    return <div className='h-[550px] w-80 flex flex-col justify-around items-center border-2 border-zinc-300 rounded-lg'>
        <div className='h-3/6 w-80 border-2  rounded-t-lg border-zinc-300'>
        <img className='object-contain h-full w-80 rounded-t-lg' alt='image' src={props.imgurl}></img>
        </div>
        <div className='h-1/6 w-full pl-2'>
            <p>Discription:{props.discription}</p>
        </div>
        <div className='flex flex-col justify-around items-center h-2/6 w-80'>
            <div className=' flex flex-col justify-around items-start  font-semibold w-72 h-1/2'>
                <p>
                    Name: {props.name}
                </p>
                <p>
                    Author: {props.author}
                </p>
                <p>
                    price: {props.price}
                </p>
            </div>
            <div className='w-80 flex justify-around items-center h-1/2'>
            <button onClick={()=>{
                
                MutateWishlist.mutate()
            }} className='w-1/3 rounded-lg px-3 py-2 bg-black text-white'>
                Wishlist!
            </button>
            <button onClick={()=>{
                MutateOrder.mutate()
            }} className='w-1/3 rounded-lg px-3 py-2 bg-black text-white'>
                Order this!
            </button>
            </div>
        </div>
    </div>
}