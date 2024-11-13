"use client"
import React from 'react'

const Btn = ({ title, content, setcontentChanger }) => {
  return (
    <>
      <button onclick={()=> {setcontentChanger(content);}} className='bg-indigo-500 p-2 rounded-md w-36'>{title}</button>
      {/* <button onClick={()=> {console.log({content});}} className='bg-indigo-500 p-5 rounded-md w-36'>{title}</button> */}
      <div>
        {setcontentChanger}
      </div>
    </>
  )
}

export default Btn
