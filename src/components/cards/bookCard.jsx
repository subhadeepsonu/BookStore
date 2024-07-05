import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'universal-cookie'
export default function BookCard(props){
    const cookie =  new Cookies()
    const token = cookie.get('token')
    const decoded = jwtDecode(token)
    const MutateOrder = useMutation({
        mutationFn:async ()=>{
            const data = await axios.post("http://localhost:3000/user/addOrders",{
                seller:props.seller,
                books:props.id,
                user:decoded.id,
                bookname:props.name
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
    return <div className='h-80 w-80 flex flex-col justify-around items-center border-2 border-zinc-300 rounded-lg'>
        <div className='h-48 w-80 border-2 bg-cyan-300 rounded-t-lg border-zinc-300'>
        <img className='object-cover h-48 w-80 rounded-t-lg' src={props.imgurl}></img>
        </div>
        <div className='flex flex-col justify-around items-center h-32 w-80'>
            <div className=' flex flex-col justify-around items-start  font-semibold w-72 h-16'>
                <p>
                    Name: {props.name}
                </p>
                <p>
                    Author: {props.author}
                </p>
            </div>
            <div className='w-80 flex justify-center items-center h-16'>
           
            <button onClick={()=>{
                MutateOrder.mutate()
            }} className='w-5/6 rounded-lg px-3 py-2 bg-black text-white'>
                Order this!
            </button>
            </div>
        </div>
    </div>
}