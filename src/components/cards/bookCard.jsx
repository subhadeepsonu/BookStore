import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function BookCard(){
    return <div className='h-80 w-80 flex flex-col justify-around items-center border-2 border-zinc-300 rounded-lg'>
        <div className='h-48 w-80 border-2 bg-cyan-300 rounded-t-lg border-zinc-300'>

        </div>
        <div className='flex flex-col justify-around items-center h-32 w-80'>
            <div className=' flex flex-col justify-around items-start  font-semibold w-72 h-16'>
                <p>
                    Name:
                </p>
                <p>
                    Author:
                </p>
            </div>
            <div className='w-80 flex justify-around items-center h-16'>
            <Button>
                Add to wishlist
            </Button>
            <Button>
                Order
            </Button>
            </div>
        </div>
    </div>
}