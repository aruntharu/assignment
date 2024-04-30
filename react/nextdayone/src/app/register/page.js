import NavBar from "@/components/navbar/page";
import {Button,Input} from "@nextui-org/react";
NavBar

const Register = () => {
  return (
    <div>
      <NavBar/>
    <div className="flex justify-center">
    <div className='border border-red m-7 w-72 p-4 '>
        <Input type="text" label="First Name" /> <br/>
        <Input type="text" label="LastName" /> <br/>
        <Input type="number" label="PhoneNumber" /> <br/>
        <Input type="email" label="Email" /> <br/>
        <Input type="Password" label="password" /> <br/>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500  to-yellow-500 text-white shadow-lg">
      Submit
    </Button>
    </div>
    </div>
    </div>
  )
}

export default Register