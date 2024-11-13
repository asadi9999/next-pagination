import React from 'react'
import Image from 'next/image'
const MobileProducts = () => {
  return (
    <>
        <h1>mobile products</h1>
        <div className=" container mx-auto flex justify-center items-center gap-3 flex-wrap">
            <Image src={'/images/iphone.jpg'} width={250} height={350} className=' bg-cover'/>
            <Image src={'/images/iphone.jpg'} width={250} height={350} className=' bg-cover'/>
            <Image src={'/images/iphone.jpg'} width={250} height={350} className=' bg-cover'/>
            <Image src={'/images/iphone.jpg'} width={250} height={350} className=' bg-cover'/>
            <Image src={'/images/iphone.jpg'} width={250} height={350} className=' bg-cover'/>
            <Image src={'/images/iphone.jpg'} width={250} height={350} className=' bg-cover'/>
            <Image src={'/images/iphone.jpg'} width={250} height={350} className=' bg-cover'/>
            
        </div>
    </>
  )
}

export default MobileProducts
