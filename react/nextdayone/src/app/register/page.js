import React from 'react'
import NavBar from "@/components/navbar/page";
import {Button,Input} from "@nextui-org/react";
import Link from 'next/link';

const Register = () => {
  return (
    <div>
      <NavBar/>
    <div className="flex justify-center bg-slate-100">
    <div className='bg-white border border-inherit m-7 w-72 p-4 rounded ring-2 ring-gray-200'>
        <Input type="text" label="First Name" /> <br/>
        <Input type="text" label="LastName" /> <br/>
        <Input type="number" label="PhoneNumber" /> <br/>
        <Input type="email" label="Email" /> <br/>
        <Input type="Password" label="password" /> <br/>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500  to-yellow-500 text-white shadow-lg">
      Submit
    </Button>
    <br/>
    Already have account <Link href= '/login'><Button radius="md">Sign In</Button></Link>
    </div>
    </div>
    </div>
  )
}

export default Register