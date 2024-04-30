import React from 'react'
import {Button,Input} from "@nextui-org/react";
import NavBar from '@/components/navbar/page';
import Link from 'next/link';
import Register from '../register/page';
NavBar
const Login = () => {
  
  return (

    <div className='flex justify-center '>
    <div className='border border-inherit m-7 w-72 p-4 h-96	rounded ring-2 ring-gray-200'>
    
    
    <div className='flex w-full flex-wrap md:flex-nowrap gap-4 p-2'>
    <Input
        isRequired
      type="email"
      label="Email"
      variant="bordered"
      defaultValue="@ksl.edu.np"
      placeholder="ajia@ksl.edu.np"
      className="max-w-xs"
    />
    </div>
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 ">
    <Input

      type="password"
      label="Password"
      variant="bordered"
      placeholder="Enter your Password"
      className="max-w-xs"
    />
    </div>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Login
    </Button>
    </br>
  
    </div>
    </div>
  )
}

export default Login

