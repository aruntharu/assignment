import React from 'react'
import {Button,Input} from "@nextui-org/react";
import NavBar from '@/components/navbar/page';
import Link from 'next/link';
NavBar
const Login = () => {  
  return (
    <div>
    <NavBar/>
    <div className='flex justify-end bg-gradient-to-r from-indigo-500 '>
    <div className='bg-white border border-inherit m-7 w-72 p-4 h-96	rounded ring-2 ring-gray-200'>
    <Input isRequired type="email" label="Email" variant="bordered" defaultValue="@ksl.edu.np" placeholder="ajia@ksl.edu.np" className="max-w-xs"/><br/>
    <Input type="password" label="Password" variant="bordered" placeholder="Enter your Password" className="max-w-xs"/><br/>
    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Login</Button><br/>
    Don't have account yet? <Link href ='/register'><Button radius="md" className=''>Sign Up</Button>  </Link><br/>
    </div>
    </div>
    </div>
  )
}
export default Login