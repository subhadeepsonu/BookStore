import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function AdminLoginCard(){
    return <div className='h-80 w-96 border-2 rounded-lg border-zinc-300 shadow-md flex-col  flex justify-around items-center'>
            <p className='text-3xl font-semibold'>Admin Login</p>
        <div className='flex-col  w-11/12'>
        <Label>Email</Label>
        <Input   className=""></Input>
        </div>
        <div className='flex-col  w-11/12'>
        <Label>Password</Label>
        <Input className=""></Input>
        </div>
        <Button>Login</Button>
    </div>
}