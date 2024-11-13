"use client"
import { useState } from 'react';
import LaptopProducts from '../laptop';
import MobileProducts from '../mobile';
import Contact from '../contact';
import Watchs from '../watchs';
import Image from 'next/image';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="">
                <div className=" relative grid grid-cols-1 md:grid-cols-4 gap-1">
                    <div className=" px-3 fixed w-full md:static md:col-span-1 bottom-0 pt-3 mt flex flex-col justify-center items-center gap-3 bg-zinc-400">
                        <Image src={'/images/sports_band.jpg'} width={150} height={180} className=' rounded-full' />
                        <button onClick={() => handleTabClick('Tab1')} className={activeTab === 'Tab1' ? 'active' : 'bg-lime-500 p-2 rounded-lg w-32'}>laptops</button>
                        <button onClick={() => handleTabClick('Tab2')} className={activeTab === 'Tab2' ? 'active' : 'bg-lime-500 p-2 rounded-lg w-32'}>mobiles</button>
                        <button onClick={() => handleTabClick('Tab4')} className={activeTab === 'Tab4' ? 'active' : 'bg-lime-500 p-2 rounded-lg w-32'}>smart watch</button>
                        <button onClick={() => handleTabClick('Tab3')} className={activeTab === 'Tab3' ? 'active' : 'bg-lime-500 p-2 rounded-lg w-32'}>contact us</button>
                    </div>
                    <div className=" col-span-1 md:col-span-3 bg-white p-5">
                        {activeTab === 'Tab1' && <div><LaptopProducts /></div>}
                        {activeTab === 'Tab2' && <div><MobileProducts /></div>}
                        {activeTab === 'Tab3' && <div><Contact /></div>}
                        {activeTab === 'Tab4' && <div><Watchs /></div>}
                    </div>

                </div>
                
            </div>
        </>

    );
};

export default Tabs;
