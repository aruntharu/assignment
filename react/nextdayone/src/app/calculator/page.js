"use client"
import { Button } from '@nextui-org/react'
import React,{useState} from 'react'
Button
const page = () => {
  let [num, setNum] = useState('')
  const digits =[['7','8','9'],
                ['4','5','6'],
                ['1','2','3'],
                ['0','00','.']
                ]
  const symbols = ['+','-','/','*','=','⌫']

  const generateDigits =()=>{
    return digits.map((item)=>{
      return(
        <div className='flex'>
          {item.map((val)=>{
        return (<div onClick={()=>setNum(num+val)}
        className='m-2 w-10 h-10 bg-gray-700 text-xl text-white text-center rounded-lg'>{val}</div>)
      })}
        </div>
      )
      
    })
    
  }
  const handleSymbolChange = (symbol)=>{
    if(symbol=== '='){
      const output = eval(num)
      setNum(output)
    }else if(symbol==='AC'){
      setNum('')
    }
    else{
      setNum(num+symbol)
    }
  }

  return (
    <div className='bg-black'>
      <div className='bg-gray-700 w-14 text-white text-4xl'>
        {num}
      </div>
      <div className='flex'>
      <div className='flex-col'>
      {generateDigits()}
      <button className='m-2 p-0 w-10 h-10 bg-gray-700 text-xl text-white text-center rounded-lg'>AC</button>
      </div>

      <div className='flex-col'>
      {symbols.map((item)=>{
        return <div
        onClick={()=>handleSymbolChange(item)}
        className='m-2 w-10 h-10 bg-orange-700 text-xl text-white text-center rounded-lg'>{item}</div>
      })}
      
      </div>

      </div>
      
    </div>
    
  )
}

export default page