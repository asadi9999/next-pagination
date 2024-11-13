"use client"
import LaptopProducts from '@/components/laptop'
import MobileProducts from '@/components/mobile'
import { useState,useEffect } from 'react'
import BtnCtrl from '@/components/ctrl'
import Tablet from '@/components/contact'
import Tabs from '@/components/tabs'
const page = () => {
    const [contentChanger,setcontentChanger]=useState('laptop');
    const [det,setdet]=useState(<LaptopProducts />);
    useEffect(()=> {
        if (contentChanger == 'laptop') {
            setdet(<LaptopProducts />)
        }else if(contentChanger == 'mobile'){
            setdet(<MobileProducts />)
        }else{
            setdet(<Tablet/>)
        }
    },[contentChanger])
    return (
        <>
            <div className=" container mx-auto p-5">
                <div className=" flex flex-col md:flex-row items-center">
                    <Tabs/>
                </div>
            </div>
        </>
    )
}

export default page
