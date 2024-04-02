"use client"

import Image from "next/image";
import Watch1 from '@/assests/watch-1.png'
import Watch2 from '@/assests/watch-2.png'
import Watch3 from '@/assests/watch-3.png'
import Watch4 from '@/assests/watch-4.png'
import { useEffect, useState } from "react";

const Banner = () => {
    const [bannerItems, setBannerItems] = useState([])
    const [currentId, setCurrentId] = useState('1')

    useEffect(() => {
        fetch("http://localhost:5000/banner")
        .then(response => response.json())
        .then(data => setBannerItems(data))
    }, [])

    const currentItem = bannerItems?.find(item => item.id === currentId)

    return (
        <div>
            <div className="grid grid-cols-12 gap-5 min-h-[80vh] items-center">
                <div className="space-y-5 col-span-5">
                    <span className="font-medium text-lg underline underline-offset-8 text-[#d4a373] uppercase">feel luxurious with us</span>
                    <h2 className="text-6xl font-semibold">{currentItem?.name}</h2>
                    <p className="text-xl font-medium text-slate-700">{currentItem?.description}</p>
                    <div className="border-2 border-primary inline-block px-4 py-1 rounded-full">
                        <span className="text-xl font-medium">From ${currentItem?.price}</span>
                    </div>
                    <div className="flex gap-5">
                        <button className="prim-btn">Buy Now</button>
                        <button className="second-btn">Explore More</button>
                    </div>
                </div>
                <div className="col-span-6 overflow-hidden">
                    <Image src={currentItem?.image} alt="watch" width={600} height={500} layout="responsive" className="banner-image"></Image>
                </div>
                <div className="col-span-1 flex flex-col gap-5 items-end justify-center">
                    {
                        bannerItems?.map((item) => (
                        <div className="banner-tab" key={item.id} onClick={() => setCurrentId(item.id)}>
                            <Image src={item.image} alt="watch-1" width={40} height={40}></Image>
                            <div className={`w-2.5 h-1.5 rounded-full bg-primary mx-auto mt-2.5 ${currentId === item.id ? 'block' : 'hidden'}`}></div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;