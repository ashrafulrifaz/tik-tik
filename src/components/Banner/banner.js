import Image from "next/image";
import Watch1 from '@/assests/watch-1.png'
import Watch2 from '@/assests/watch-2.png'
import Watch3 from '@/assests/watch-3.png'
import Watch4 from '@/assests/watch-4.png'

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 py-10 min-h-[80vh] items-center">
                <div className="col-span-10 relative">
                    <div>
                        <div className="space-y-5">
                            <h2 className="text-6xl font-semibold w-1/2 max-w-[550px]">Rolex Submariner</h2>
                            <p className="text-xl font-medium w-1/2 max-w-[500px] text-slate-700">Sleek and durable, our Titanium Chronograph watch boasts a sophisticated design that suits both casual and formal occasions. </p>
                            <div className="border-2 border-primary inline-block px-4 py-1 rounded-full">
                                <span className="text-xl font-medium">From $9,550</span>
                            </div>
                            <div className="flex gap-5">
                                <button className="prim-btn">Buy Now</button>
                                <button className="second-btn">Explore More</button>
                            </div>
                        </div>
                        <div>
                            <Image src={Watch1} alt="watch" className="banner-image"></Image>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-5 items-end justify-center">
                    <div className="banner-tab">
                        <Image src={Watch1} alt="watch-1" width={40} height={40}></Image>
                        <div className="w-2.5 h-1.5 rounded-full bg-primary mx-auto mt-2.5"></div>
                    </div>
                    <div className="banner-tab">
                        <Image src={Watch2} alt="watch-1" width={40} height={40}></Image>
                    </div>
                    <div className="banner-tab">
                        <Image src={Watch3} alt="watch-1" width={40} height={40}></Image>
                    </div>
                    <div className="banner-tab">
                        <Image src={Watch4} alt="watch-1" width={40} height={40}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;