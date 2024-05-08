'use client'
import { semanticColors } from '@nextui-org/react';
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";


const page = () => {
  let [color, setColor] = useState('gray')
  const colorChange=()=>{
    setColor('red')
    if(color=='red'){
      setColor('gray')
    }else{
      setColor('red')
    }

  }
  return (
    <div>
      <FaHeart onClick={()=>colorChange()} color={color}/>
    </div>
  )
}

export default page