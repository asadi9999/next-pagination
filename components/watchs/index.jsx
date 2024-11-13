import React from 'react'
import Image from 'next/image'
const Watchs = () => {
    return (
        <>
            <h1>mobile products</h1>
            <div className=" container mx-auto flex justify-between gap-3 flex-wrap">
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
                <Image src={'/images/sports_band.jpg'} width={250} height={350} className=' bg-cover' />
            </div>
        </>
    )
}

export default Watchs
