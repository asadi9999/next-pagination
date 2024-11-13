import React from 'react'
import Image from 'next/image'


const LaptopProducts = () => {
  return (
    <>
        <h1>laptops</h1>
        <div className=" container mx-auto flex justify-center items-center gap-3 flex-wrap">
            <Image src={'/images/hp-3.jpg'} width={300} height={400} className=' bg-cover'/>
            <Image src={'/images/hp-3.jpg'} width={300} height={400} className=' bg-cover'/>
            <Image src={'/images/hp-3.jpg'} width={300} height={400} className=' bg-cover'/>
            <Image src={'/images/hp-3.jpg'} width={300} height={400} className=' bg-cover'/>
        </div>
    </>
  )
}

export default LaptopProducts
